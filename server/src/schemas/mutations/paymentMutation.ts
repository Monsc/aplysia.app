import { GraphQLID, GraphQLNonNull } from 'graphql';
import { BookingType } from '../types';
import { Booking } from '../../models/Booking';
import { User } from '../../models/User';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const isTestMode = process.env.NODE_ENV === 'development';

export const payAmount = {
  type: BookingType,
  args: {
    tokenId: { type: new GraphQLNonNull(GraphQLID) },
    bookingId: { type: new GraphQLNonNull(GraphQLID) },
    bookedBy: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(parent: any, args: any) {
    if (!args.tokenId) throw new Error("Token ID is not given.");
    
    const booking = await Booking.findById(args.bookingId);
    const user = await User.findById(args.bookedBy);

    if (!user || !booking) throw new Error("No booking or user found.");

    try {
      if (isTestMode) {
        // 测试模式下模拟支付成功
        const updatedBooking = await Booking.findByIdAndUpdate(
          args.bookingId,
          {
            paid: true,
            paymentId: 'test_payment_' + Math.random().toString(36).substr(2, 9),
            paymentDate: new Date()
          },
          { new: true }
        );
        return updatedBooking;
      }

      const customer = await stripe.customers.create({
        email: user.email,
        source: args.tokenId
      });

      const charge = await stripe.charges.create({
        amount: booking.amount * 100,
        currency: 'cny',
        customer: customer.id,
        receipt_email: user.email,
        description: `预订房间 ${booking.roomNumbers.join(', ')}`,
      }, { 
        idempotencyKey: Math.round(Math.random() * 10000).toString()
      });

      if (charge) {
        const updatedBooking = await Booking.findByIdAndUpdate(
          args.bookingId,
          {
            paid: true,
            paymentId: charge.id,
            paymentDate: new Date()
          },
          { new: true }
        );
        return updatedBooking;
      }
    } catch (error) {
      throw new Error("支付失败: " + error.message);
    }
  }
}; 