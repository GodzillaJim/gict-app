import React from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import "yup-phone";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";

interface IFormFields {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}
enum Fields {
  FullName = "fullName",
  Email = "email",
  Phone = "phone",
  Address = "address",
}

const LABELS = {
  fullName: "Full Name",
  email: "Email",
  phone: "Phone",
  address: "Address",
};

const PLACEHOLDERS = {
  fullName: "Jane Doe",
  email: "janedoe@example.com",
  phone: "+254700123456",
  address: "71 Makongeni, Thika",
};

const TabOne = () => {
  const {
    handleSubmit,
    values,
    errors,
    setFieldValue,
    isValid,
    isSubmitting,
    isValidating,
  } = useFormik<IFormFields>({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },

    validationSchema: object().shape({
      fullName: string().required("Please enter your full name."),
      email: string()
        .required("Please provide an email address.")
        .email("Please provide a valid email"),
      address: string().required("Please provide an address."),
      phone: string().phone("KEN", false, "Please provide a valid phone."),
    }),
    onSubmit: (values: IFormFields) => {
      console.log(values);
    },
  });

  const isLoading = isValidating || isSubmitting;
  return (
    <Container>
      <Row>
        <Col xl={8} lg={8} md={9} sm={12} xs={12}>
          <div className={"m-2"}>
            <Card.Body>
              <Form
                id={"form-details"}
                noValidate={true}
                onSubmit={handleSubmit}
              >
                <Form.Group controlId={"fullNameGroup"}>
                  <Form.Label>{LABELS.fullName}</Form.Label>
                  <Form.Control
                    type={"text"}
                    isInvalid={Boolean(errors.fullName)}
                    name={Fields.FullName}
                    value={values.fullName}
                    placeholder={PLACEHOLDERS.fullName}
                    disabled={isLoading}
                    onChange={(event) =>
                      setFieldValue(Fields.FullName, event.target.value)
                    }
                    aria-describedby="inputGroupPrepend"
                  />
                  <Form.Control.Feedback type={"invalid"}>
                    {errors.fullName || ""}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group controlId={"emailGroup"}>
                  <Form.Label>{LABELS.email}</Form.Label>
                  <Form.Control
                    type={"email"}
                    isInvalid={Boolean(errors.email)}
                    name={Fields.Email}
                    value={values.email}
                    placeholder={PLACEHOLDERS.email}
                    disabled={isLoading}
                    onChange={(event) =>
                      setFieldValue(Fields.Email, event.target.value)
                    }
                    aria-describedby="inputGroupPrepend"
                  />
                  <Form.Control.Feedback type={"invalid"}>
                    {errors.email || ""}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group controlId={"phoneGroup"}>
                  <Form.Label>{LABELS.phone}</Form.Label>
                  <Form.Control
                    isInvalid={Boolean(errors.phone)}
                    name={Fields.Phone}
                    value={values.phone}
                    placeholder={PLACEHOLDERS.phone}
                    disabled={isLoading}
                    onChange={(event) =>
                      setFieldValue(Fields.Phone, event.target.value)
                    }
                    aria-describedby="inputGroupPrepend"
                  />
                  <Form.Control.Feedback type={"invalid"}>
                    {errors.phone || ""}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group controlId={"addressGroup"}>
                  <Form.Label>{LABELS.address}</Form.Label>
                  <Form.Control
                    isInvalid={Boolean(errors.address)}
                    name={Fields.Address}
                    value={values.address}
                    placeholder={PLACEHOLDERS.address}
                    disabled={isLoading}
                    onChange={(event) =>
                      setFieldValue(Fields.Address, event.target.value)
                    }
                    aria-describedby="inputGroupPrepend"
                  />
                  <Form.Control.Feedback type={"invalid"}>
                    {errors.address || ""}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Button
                  className={"float-right"}
                  disabled={isLoading || !isValid}
                  type="submit"
                >
                  {isLoading && <Spinner animation={"border"} size={"sm"} />}
                  {!isLoading && "Submit"}
                </Button>
              </Form>
            </Card.Body>
          </div>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default TabOne;
