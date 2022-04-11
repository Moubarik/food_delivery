import bcrypt from 'bcryptjs';
import Tokenizer from '../modules/index.js';

class AuthService {
  async isPasswordMatch(password, original) {
    return  await bcrypt.compare(password, original);
  }

  async changedPasswordAfter(passwordChangedAt, iat) {
    const ChangedAt = parseInt(passwordChangedAt.getTime() / 1000, 10);
    return iat < ChangedAt;
  }

  async generateToken(payload) {
    return {
      accessToken: Tokenizer.generateAccessToken(payload),
      // refreshToken: Tokenizer.generateRefreshToken(),
    };
  }

  async generatePasswordResetToken() {
    return Tokenizer.generateRandomToken();
  }

  async hashPasswordResetToken(resetToken) {
    return Tokenizer.generateHashedToken(resetToken);
  }

  async ResetExpiresToken() {
    return Date.now() + 10 * 60 * 1000;
  }
}
export default new AuthService();
