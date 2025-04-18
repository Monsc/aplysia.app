import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import StripeCheckout from '../components/Payment/StripeCheckout';

const PaymentTest: React.FC = () => {
  const [amount] = useState(1000); // 测试金额：1000元
  const bookingId = 'test-booking-123';
  const userId = 'test-user-456';

  const handleSuccess = () => {
    console.log('支付成功！');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          支付测试页面
        </Typography>
        <Typography variant="body1" gutterBottom>
          预订ID: {bookingId}
        </Typography>
        <Typography variant="body1" gutterBottom>
          用户ID: {userId}
        </Typography>
        <Typography variant="body1" gutterBottom>
          支付金额: ¥{amount}
        </Typography>
        <Box sx={{ mt: 3 }}>
          <StripeCheckout
            amount={amount}
            bookingId={bookingId}
            userId={userId}
            onSuccess={handleSuccess}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PaymentTest; 