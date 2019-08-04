export default receivedData => {
  return new Promise((resolve, reject) => {
    try {
      const byId = receivedData.reduce((store, {
        id,
        name,
        rocket_name,
        type,
        rocket_type,
        active,
        flickr_images: images,
      }) => {
        store[id] = {
          id,
          name: name || rocket_name,
          type: type || rocket_type,
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
