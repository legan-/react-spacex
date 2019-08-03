export default receivedData => {
  return new Promise((resolve, reject) => {
    try {
      const byId = receivedData.reduce((store, {
        id,
        name,
        type,
        active,
        flickr_images: images,
      }) => {
        store[id] = {
          id,
          name,
          type,
          active,
          image: images[0]
        };

        return store;
      }, {});

      resolve(byId);
    } catch (error) {
      reject(error);
    }
  });
};
