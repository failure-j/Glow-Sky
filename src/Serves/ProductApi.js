// import { port } from "../server";


// const URL = `http://localhost:${port}`;
// const Product_URL = `${URL}/api/data`;

export async function GetProduct() {
  try {
    const fetching = await fetch('../ProductData.json');
    const data = await fetching.json();
    // console.log(data.data.products);
    return data;
  } catch (error) {
 console.log(error);
  }
}
