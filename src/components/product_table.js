import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { rows } from "../data.js";
import { useDispatch } from "react-redux";
import {
  addproducts,
  removeproducts,
} from "../redux/actions/index";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
});

export default function BasicTable() {
  const dispatch = useDispatch();
  const Button = ({text,onClick}) =>{
    return(
      <button onClick={onClick} style={{
        border: 'none',
        fontWeight: '500',
        cursor: 'pointer'
      }}>{text}</button>
    )
  }
  const [data,setData] = useState(rows);
  function subtotal(items) {
    return items
      .map(({ totalPrice }) => totalPrice)
      .reduce((sum, i) => sum + i, 0);
  }
  const [total, setTotal] = useState(subtotal(rows));
  const classes = useStyles();
 function ccyFormat(num) {
   return `${num.toFixed(2)}`;
 }
  return (
    <div style={{ margin: "5% 5%" }}>
      <h2>Shopping Cart</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Size</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, i) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    <img src={item.img} alt={item.name} height={50} />
                    {item.name}
                  </div>
                </TableCell>
                <TableCell align="right">
                  <select>
                    <option value="1">S</option>
                    <option value="2">M</option>
                    <option value="3">XL</option>
                  </select>
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => {
                      if (item.quantity > 0) {
                        dispatch(removeproducts({ item }));
                        setTotal(total - item.price);
                      }
                    }}
                    text="-"
                  />
                  &nbsp;
                  {item.quantity}
                  &nbsp;
                  <Button
                    onClick={() => {
                      dispatch(addproducts({ item }));
                      setTotal(total + item.price);
                    }}
                    text="+"
                  />
                </TableCell>
                <TableCell align="right">
                  ${ccyFormat(item.quantity * item.price)}
                  
                </TableCell>
                <TableCell align="right">
                  <ClearOutlinedIcon
                    onClick={() => {
                      const ds = data.filter((d, index) => {
                        return index !== i;
                      });
                      setData(ds);
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">${ccyFormat(total)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Shipping</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">$0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">${ccyFormat(total)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div></div>
    </div>
  );
}
