import expect from 'expect';

import parseReceivedData from './parseReceivedData';

describe('parseReceivedData', () => {  
  it('should transform array to object - case 1', () => {
    const data = [
      {
        id: 4,
        name: 'Name 1',
        type: 'Type 1',
        flickr_images: [
          'Item 1 - Image 1',
          'Item 1 - Image 2'
        ],
        description: 'Description 1'
      },
      {
        id: 10,
        name: 'Name 2',
        type: 'Type 2',
        flickr_images: [
          'Item 2 - Image 1',
          'Item 2 - Image 2'
        ],
        description: 'Description 2'
      }
    ];

    const expected = {
      '4': {
        id: '4',
        name: 'Name 1',
        type: 'Type 1',
        image: 'Item 1 - Image 1',
        description: 'Description 1'
      },
      '10': {
        id: '10',
        name: 'Name 2',
        type: 'Type 2',
        image: 'Item 2 - Image 1',
        description: 'Description 2'
      }
    };

    parseReceivedData(data).then(response => {
      expect(response).toEqual(expected);
    });
  });

  it('should transform array to object - case 2', () => {
    const data = [
      {
        id: 4,
        rocket_name: 'Rocket Name 1',
        rocket_type: 'Rocket Type 1',
        flickr_images: [
          'Item 1 - Image 1',
          'Item 1 - Image 2'
        ],
        description: 'Description 1'
      },
      {
        id: 10,
        rocket_name: 'Rocket Name 2',
        rocket_type: 'Rocket Type 2',
        flickr_images: [
          'Item 2 - Image 1',
          'Item 2 - Image 2'
        ],
        description: 'Description 2'
      }
    ];

    const expected = {
      '4': {
        id: '4',
        name: 'Rocket Name 1',
        type: 'Rocket Type 1',
        image: 'Item 1 - Image 1',
        description: 'Description 1'
      },
      '10': {
        id: '10',
        name: 'Rocket Name 2',
        type: 'Rocket Type 2',
        image: 'Item 2 - Image 1',
        description: 'Description 2'
      }
    };

    parseReceivedData(data).then(response => {
      expect(response).toEqual(expected);
    });
  });
});
