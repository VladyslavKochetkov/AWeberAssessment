export class PasswordValidator {
  private password: string;
  constructor(password: string) {
    this.password = password;
  }

  updatePassword = (password: string): void => {
    this.password = password;
  };

  meetsLengthRequirements = (): boolean => this.password.length >= 6;
  meetsUpperCaseRequirements = (): boolean => /[A-Z]/.test(this.password);
  meetsLowerCaseRequirements = (): boolean => /[a-z]/.test(this.password);
  meetsNumericRequirements = (): boolean => /\d/.test(this.password);
  meetsSpecialCharacterRequirements = (): boolean => /[@!#$%^&*()_\-+={[}\]\|:;"'<,>.]/.test(this.password);

  isValidPassword = (): boolean =>
    this.meetsLengthRequirements() &&
    this.meetsUpperCaseRequirements() &&
    this.meetsLowerCaseRequirements() &&
    this.meetsNumericRequirements() &&
    this.meetsSpecialCharacterRequirements();
}
