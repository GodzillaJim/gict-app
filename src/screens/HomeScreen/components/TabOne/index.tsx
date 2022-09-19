import React from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import "yup-phone";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { Fields, IFormFields, LABELS, PLACEHOLDERS } from "./data";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store";
import { formAction } from "../../../../store/actions/TabOne";

const TabOne = () => {
  const { loading, error, success } = useAppSelector(
    (state: RootState) => state.form
  );
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    values,
    errors,
    setFieldValue,
    isValid,
    isSubmitting,
    isValidating,
    setSubmitting,
    touched,
    resetForm,
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
    onSubmit: (val: IFormFields) => {
      dispatch(formAction(val));
      setSubmitting(false);
    },
  });

  React.useEffect(() => {
    if (success) {
      resetForm();
    }
  }, [success]);

  const isLoading = React.useMemo(() => {
    return isValidating || isSubmitting || loading;
  }, [isValidating, isSubmitting, loading]);

  return (
    <Container fluid>
      <Row>
        <Col xl={6} lg={7} md={8} sm={12} xs={12}>
          <div className={"m-2"}>
            <Card.Body>
              {error && <Alert variant={"danger"}>{error}</Alert>}
              {success && (
                <Alert variant={"success"}>Data submitted successfully!</Alert>
              )}
              <Form
                id={"form-details"}
                noValidate={true}
                onSubmit={handleSubmit}
                validated={false}
              >
                <Form.Group controlId={"fullNameGroup"}>
                  <Form.Label>{LABELS.fullName}</Form.Label>
                  <Form.Control
                    type={"text"}
                    isInvalid={Boolean(touched.fullName && errors.fullName)}
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
                    isInvalid={Boolean(touched.email && errors.email)}
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
                    isInvalid={Boolean(touched.phone && errors.phone)}
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
                    isInvalid={Boolean(touched.address && errors.address)}
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
                  id={"form-submit-button"}
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
