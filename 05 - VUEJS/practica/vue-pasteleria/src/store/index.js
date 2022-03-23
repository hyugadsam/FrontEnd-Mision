import { createStore } from 'vuex'

export default createStore({
  state: {
    Flavors: [
      {
        id: 1,
        Description: 'Fresa',
        Price: 10,
        Inventory: 2
      },
      {
        id: 2,
        Description: 'Chocolate',
        Price: 11,
        Inventory: 2
      },
      {
        id: 3,
        Description: 'Vainilla',
        Price: 12,
        Inventory: 1
      }
    ],
    OrnamentTypes: [
      {
        id: 1,
        Name: 'Comestible'
      },
      {
        id: 2,
        Name: 'No Comestible'
      },
      {
        id: 3,
        Name: 'No Comestible y Flamable'
      }
    ],
    Ornaments: [
      {
        id: 1,
        Description: 'Nombre en Chocolate',
        Price: 10,
        Inventory: 2,
        Type: 1
      },
      {
        id: 2,
        Description: 'Dibujo con betun',
        Price: 10,
        Inventory: 2,
        Type: 1
      },
      {
        id: 3,
        Description: 'Figura',
        Price: 10,
        Inventory: 1,
        Type: 2
      },
      {
        id: 4,
        Description: 'Velas',
        Price: 10,
        Inventory: 10,
        Type: 3
      }
    ],
    Orders: [
      {
        id: 1,
        Name: 'Persona promedio',
        Tel: '449123456798',
        Email: 'user@CompanyMail.com',
        Description: `software statistics teaching technology tips tool tools toread travel tutorial tutorials 
        tv twitter typography ubuntu usability video videos visualization web web\ 2.0 web\ design
         webdev wiki windows wordpress work writing youtube`,
        Price: 200,
        CreateDate: 1647991694217,
        Flavors: [1,2,3],
        Ornaments: [1,2,3]
      }
    ]
  },
  getters: {
    getFlavors(state){
      return state.Flavors.filter( r => r.Inventory > 0); 
    },
    getOrnaments(state){
      return state.Ornaments.filter( r => r.Inventory > 0); 
    },
    getOrnamentTypes(state){
      return state.OrnamentTypes;
    },
    getFullFlavors(state){
      return state.Flavors; 
    },
    getFullOrnaments(state){
      return state.Ornaments; 
    },
    getOrders(state){
      let ordenes = state.Orders.map( (o) => {
        let date = new Date(o.CreateDate);
        return {
          id: o.id,
          Name: o.Name,
          Tel: o.Tel,
          Email: o.Email,
          CreateDate: `Dia: ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} \nHora: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
          Description: o.Description,
          Price: o.Price,
          Flavors: state.Flavors.filter(fl => o.Flavors.includes(fl.id)).map((f) => {return f.Description}),
          Ornaments: state.Ornaments.filter(or => o.Ornaments.includes(or.id)).map((ornament) => {return ornament.Description})
        };
        
      })
      return ordenes;

    }

  },
  mutations: {
    AddOrder(state, order) {
      let price = 0;
      //Disminuir el inventario Sabores
      let sabores = state.Flavors.filter( f => order.Flavors.includes(f.id) )
      sabores.forEach(element => {
        element.Inventory--;
        price += element.Price;
      });

      //Disminuir el inventario Adornos
      let adornos = state.Ornaments.filter( o => order.Ornaments.includes(o.id) )
      adornos.forEach(element => {
        element.Inventory--;
        price += element.Price;
      });

      let o = state.Orders.slice(-1)[0];
      order.id = o.id + 1;
      order.Price = price;
      order.CreateDate = Date.now();

      state.Orders.push(order);
    },

    AddFlavor(state, flavor){
      let f = state.Flavors.slice(-1)[0];
      flavor.id = f.id + 1;
      state.Flavors.push(flavor);
    },

    AddOrnament(state, ornament){
      let o = state.Ornaments.slice(-1)[0];
      ornament.id = o.id + 1;
      state.Ornaments.push(ornament);
    }
    
  },
  actions: {
  },
  modules: {
  }
})
