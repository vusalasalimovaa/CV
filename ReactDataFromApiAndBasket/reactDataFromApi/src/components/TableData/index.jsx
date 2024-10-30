import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const TableData = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sortByAZName = () => {
    const datasCopy = [...data];
    datasCopy.sort((a, b) => a.name.localeCompare(b.name));
    setData(datasCopy);
  };

  const sortByZAName = () => {
    const datasCopy = [...data];
    datasCopy.sort((a, b) => b.name.localeCompare(a.name));
    setData(datasCopy);
  };

  const sortByHighPrice = () => {
    const datasCopy = [...data];
    datasCopy.sort((a, b) => b.unitPrice - a.unitPrice);
    setData(datasCopy);
  };

  const sortByLowPrice = () => {
    const datasCopy = [...data];
    datasCopy.sort((a, b) => a.unitPrice - b.unitPrice);
    setData(datasCopy);
  };

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div
        className="inputandbutton"
        style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}
      >
        <input
          type="text"
          style={{
            backgroundColor: "white",
            margin: "5px",
            border: "1px solid gray",
            color: "black",
            width: "290px",
          }}
          placeholder="Search name..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            setInputValue("");
          }}
        >
          Search
        </Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>
              Name
              <Button
                className="m-1"
                variant="secondary"
                onClick={() => {
                  sortByAZName();
                }}
              >
                A-Z
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  sortByZAName();
                }}
              >
                Z-A
              </Button>
            </th>
            <th>
              UnitPrice
              <Button
                className="m-1"
                variant="secondary"
                onClick={() => {
                  sortByLowPrice();
                }}
              >
                Low-High
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  sortByHighPrice();
                }}
              >
                High-Low
              </Button>
            </th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Add to Basket</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((elem) =>
              elem.name.toUpperCase().includes(inputValue.toUpperCase())
            )
            .map((elem) => {
              return (
                <tr key={uuidv4()}>
                  <td>{elem.id}</td>
                  <td>{elem.name}</td>
                  <td>{elem.unitPrice}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        let arr = data.filter((el) => el.id != elem.id);

                        setData(arr);

                        axios.delete(
                          `https://northwind.vercel.app/api/products/${elem.id}`
                        );
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => {
                        let newName = prompt("Adi deyisdir...", elem.name);

                        let arr = data.map((el) => {
                          if (el.id == elem.id) {
                            el.name = newName;
                          }

                          return el;
                        });

                        setData(arr);

                        axios.patch(
                          `https://northwind.vercel.app/api/products/${elem.id}`,
                          { name: newName }
                        );
                      }}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button variant="success">Basket</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default TableData;
