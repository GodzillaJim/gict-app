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

const getSampleItems = (): IITem[] => {
  return [
    {
      Age: 6,
      ID: 4,
      Message: "Alpha Beta",
    },
  ];
};

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
  }, [items]);

  const filteredItems = useMemo(() => {
    return items || [];
  }, [items]);

  const fetchItems = () => {
    dispatch(listItemsAction());
  };

  const fetchUpdates = () => {
    dispatch(updateItemsAction());
  };

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
                        <Button variant={"link"} className={"btn-light"}>
                          <i className={"bi bi-trash text-danger"}></i>
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
