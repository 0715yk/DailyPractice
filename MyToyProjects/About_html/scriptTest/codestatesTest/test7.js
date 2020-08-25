let input = [
    {
      id: 1,
      name: 'johnny',
    },
      {
      id: 13,
    },
    {
      id: 33,
      name: 'ingi',
      children: [
        {
          id: 23,
          name: 'johnson',
        },
        {
          id: 50,
          name: 'steve',
          children: [
            {
              id: 60,
              name: 'lisa',
            },
            {
              id: 71,
              children: [
                {
                  id : 88,
                  name : "swan",
                }
              ]
            },
          ],
        },
        {
          id: 11,
        },
      ],
    },
     {
      id: 2,
      name: 'ingi',
      children: [
        {
          id: 3,
          name: 'johnson',
        },
        {
          id: 5,
          name: 'steve',
          children: [
            {
              id: 6,
              children: [
                {
                  id:10,
                  name:'hash',
                },
                {
                  id:13,
                  name:'wow',
                }
              ],
              name: 'lisa',
            },
          ],
        },
        {
          id: 14,
        },
      ],
    }
  ];

  function test7(arr, id, result=undefined) {
    for (let el of arr) {
      if (el['id'] === id) {
        return el;
      } 
      if(el.hasOwnProperty('children')) {
        result = test7(el['children'], id, result);
        if (result !== null) {
          return result;
        } 
      }
    }
    return null;
  }