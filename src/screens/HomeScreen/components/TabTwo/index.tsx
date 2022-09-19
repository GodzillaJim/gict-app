import React, { useMemo } from "react";
import {
  Button,
  Col,
  Container,
  OverlayTrigger,
  Row,
  Spinner,
  Table,
  Tooltip,
  Alert,
} from "react-bootstrap";
import {
  listItemsAction,
  updateItemsAction,
} from "../../../../store/actions/TabTwo";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store";

export interface IITem {
  ID: number;
  Message: string;
  Age: number;
}

const titles = ["ID", "Message", "Age", ""];

const TabTwo = () => {
  const dispatch = useAppDispatch();
  const { loading, error, items } = useAppSelector(
    (state: RootState) => state.items
  );
  const { loading: updating, error: updateError } = useAppSelector(
    (state: RootState) => state.updateItems
  );

  const [interval, setUpdateInterval] = React.useState<number>(10000);

  const fetchItems = () => {
    dispatch(listItemsAction());
  };

  const fetchUpdates = () => {
    if(!updating){
      dispatch(updateItemsAction());
    }
  };

  React.useEffect(() => {
    if (!loading && !error && !items) {
      fetchItems();
    }
  }, [loading, error, items]);

  React.useEffect(() => {
    if (items) {
      setInterval(fetchUpdates, interval);
    }
    if (items && updateError) {
      setUpdateInterval((prevState) => prevState * 10);
    }
  }, [items, updateError]);

  const filteredItems = useMemo(() => {
    return items || [];
  }, [items]);

  return (
    <Container>
      <Row>
        <Col className={"w-100 feedback-height"}>
          <div className={"w-100 d-flex justify-content-between"}>
            <div className={"text-info h5"}></div>
            <div>
              {updating && (
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">
                      Fetching latest updates.
                    </Tooltip>
                  }
                  defaultShow={false}
                >
                  <Spinner animation={"border"} color={"info"} size={"sm"} />
                </OverlayTrigger>
              )}
              {updateError && (
                <div>
                  <span className={"text-danger"}>Update failed.</span>
                  <Button
                    variant={"link"}
                    onClick={fetchUpdates}
                    color={"info"}
                    size={"sm"}
                  >
                    Retry
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className={"w-100 text-center"}>
          {loading && <Spinner animation={"border"} size={"sm"} />}
          {error && (
            <Alert variant={"danger"}>
              <span>{error}</span>
              <Button variant={"link"} onClick={fetchItems}>
                Retry
              </Button>
            </Alert>
          )}
          {items && (
            <Table>
              <thead>
                <tr>
                  {titles.map((t, index) => (
                    <th key={`th-${index}`}>{t}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((value: IITem, index: number) => {
                  return (
                    <tr key={`items-data-${index}`}>
                      <td>{value.ID}</td>
                      <td>{value.Message}</td>
                      <td>{value.Age}</td>
                      <td>
                        <Button className={"btn-sm btn-primary"}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fillRule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          &nbsp;&nbsp;Edit
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TabTwo;
