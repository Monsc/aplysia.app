import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MAKE_PAYMENT } from '../../graphql/mutations/paymentMutation';
import { toast } from 'react-toastify';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import { Button } from '@mui/material';

interface Props {
  bookingId: string;
  userId: string;
  amount: number;
  onSuccess?: () => void;
}

const StripeCheckoutComponent: React.FC<Props> = ({
  bookingId,
  userId,
  amount,
  onSuccess,
}) => {
  const [loading, setLoading] = useState(false);
  const [payAmount] = useMutation(MAKE_PAYMENT);

  const handleToken = async (token: Token) => {
    setLoading(true);
    try {
      const { data } = await payAmount({
        variables: {
          bookingId: bookingId,
          userId: userId,
          amount: amount,
          paymentMethod: 'stripe',
          paymentToken: token.id,
        },
      });

      if (data?.payAmount?.success) {
        toast.success(data.payAmount.message || '支付成功！');
        if (typeof onSuccess === 'function') {
          onSuccess();
        }
      } else {
        toast.error(data?.payAmount?.message || '支付失败，请重试。');
      }
    } catch (error: unknown) {
      console.error("Stripe Payment Error:", error);
      if (error instanceof Error) {
        toast.error(`支付失败: ${error.message}`);
      } else {
        toast.error('支付过程中发生未知错误');
      }
    } finally {
      setLoading(false);
    }
  };

  const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  if (!stripeKey) {
    console.error("REACT_APP_STRIPE_PUBLISHABLE_KEY is not set.");
    return <div>支付功能当前不可用。</div>;
  }

  return (
    <div>
      <StripeCheckout
        token={handleToken}
        stripeKey={stripeKey}
        name="JoyHostel"
        description={`支付预订 #${bookingId}`}
        amount={amount * 100}
        currency="CNY"
        locale="zh"
      >
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          fullWidth
          style={{ marginTop: '10px' }}
        >
          {loading ? '处理中...' : `支付 ¥${amount}`}
        </Button>
      </StripeCheckout>
    </div>
  );
};

export default StripeCheckoutComponent; 