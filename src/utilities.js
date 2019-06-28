export const getAllPost = doc => {
  return { id: doc.id, ...doc.data() };
};
