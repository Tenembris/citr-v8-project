async function fetchSearch({ queryKey }) {
  const { animal, location, breed, page } = queryKey[1];
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}&page=${page}`
  );

  if (!res.ok)
    throw new Error(`pet search not okay: ${animal}, ${location}, ${breed}`);

  if (res.ok) {
    console.log(page);
    console.log(res);
  }

  return res.json();
}

export default fetchSearch;
