import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(key, value) {
  return { key, value };
}

const rows = [
  createData("Name", "Amresh Kumar"),
  createData("Phone No.", 9535188512),
  createData("D.O.B.", "10 / 11 / 1993"),
  createData("Higher Education", "B.E."),
  createData("Occupation", "JavaScript Developer"),
];

export default function AboutTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        background: "#34495E",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Table size="small" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.key}
              //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              sx={{
                // border: 0,
                borderColor: " lighten(#34495E, 10%)",
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  border: 0,
                  fontWeight: 600,
                  color: "#dd5",
                  fontSize: "1.1rem",
                }}
              >
                {row.key}
              </TableCell>
              <TableCell
                align="right"
                sx={{ border: 0, color: "#fff", fontSize: "1.2rem" }}
              >
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
