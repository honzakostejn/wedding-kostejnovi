export const validateEmail = (email: string | undefined): 'success' | 'error' => {
  const regex = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$/g
  if (regex.test(email ?? '')) {
    return 'success';
  }
  else {
    return 'error';
  }
};

export const validatePhoneNumber = (phoneNumber: string | undefined): 'success' | 'error' => {
  const regex = /^(\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/g
  if (regex.test(phoneNumber ?? '')) {
    return 'success';
  }
  else {
    return 'error';
  }
};