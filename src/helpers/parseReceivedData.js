export default receivedData => {
  return new Promise((resolve, reject) => {
    try {
      const byId = receivedData.reduce((store, {
        id,
        name,
        rocket_name,
        type,
        rocket_type,
        flickr_images: images,
        description
      }) => {
        store[id] = {
          id: id.toString(),
          name: name || rocket_name,
          type: type || rocket_type,
          image: images[0],
          description
        };

        return store;
      }, {});

      resolve(byId);
    } catch (error) {
      reject(error);
    }
  });
};
