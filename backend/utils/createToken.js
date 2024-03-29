import jwt from 'jsonwebtoken';

const generateToken = ( userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // Set JWT as an HTTP-Only Cookie
  // res.cookie('jwt', token, {
  //   httpOnly: false,
  //   secure: false, // Always secure
  //   sameSite: 'none', // Allow cross-origin
  //   maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  //   domain: 'https://smart-store-k8n9.vercel.app', // Set your domain
  // });

  return token;
};

export default generateToken;