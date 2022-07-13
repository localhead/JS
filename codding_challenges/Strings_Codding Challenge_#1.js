// Strings Codding Challenge #1

const initialStr =
  "underscore_case\n first_name\nSome_Variable\n    calculate_AGE\ndelayed_departure\n";

const camelCaseFunJonas = function (initialStr) {
  const rows = initialStr.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"F".repeat(i + 1)}`);
  }
};
//camelCaseFun(initialStr);
camelCaseFunJonas(initialStr);
