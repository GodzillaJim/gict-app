export interface IFormFields {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}
export enum Fields {
  FullName = "fullName",
  Email = "email",
  Phone = "phone",
  Address = "address",
}

export const LABELS = {
  fullName: "Full Name",
  email: "Email",
  phone: "Phone",
  address: "Address",
};

export const PLACEHOLDERS = {
  fullName: "Jane Doe",
  email: "janedoe@example.com",
  phone: "+254700123456",
  address: "71 Makongeni, Thika",
};
