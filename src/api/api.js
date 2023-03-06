// const getAllProducts = async () => {
//   return fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => data);
// };

export const getAllStories = () => {
  return fetch(
    "https://instagram-test-app-3f2a4-default-rtdb.europe-west1.firebasedatabase.app/userStories/-NM9XyV43-m0UiH4uOzM.json"
  )
    .then((resStoryData) => resStoryData.json())
    .then((data) => data);
};

export const getAllUsersPosts = () => {
  return "https://instagram-test-app-3f2a4-default-rtdb.europe-west1.firebasedatabase.app/userPosts/-NM9YnBaKVrv6dZXHYTF.json"
    .then((resPostsData) => resPostsData.json())
    .then((data) => data);
};

// export default getAllProducts;
