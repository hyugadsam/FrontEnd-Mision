const urlPokemonApi = "https://pokeapi.co/api/v2/";
const ListSprites = [
    "front_default",
    "front_shiny",
    "back_default",
    "back_shiny",
]


const GetPokemonTypes = () => {
    fetch(`${urlPokemonApi}type`).then((res) => {
        if (res.status != "200") {
            console.log('The types couldnt loaded');
            console.log(res);
            //pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            let SegundoTipo = document.getElementById('SegundoTipo');
            let PrimerTipo = document.getElementById('PrimerTipo');
            data.results.forEach(element => {
                let id = element.url.replace(`${urlPokemonApi}type/`, '');
                id = id.replace('/', '');

                if (parseInt(id) > 100) {   //Avoid random types from the api
                    return;
                }
                let opt = document.createElement("option");
                opt.value = id;
                opt.innerHTML = element.name;
                //Otra variable de option porque la primera no se asigna a ambos selects
                let opt2 = document.createElement("option");
                opt2.value = id;
                opt2.innerHTML = element.name;

                // then append it to the select element
                PrimerTipo.appendChild(opt);
                SegundoTipo.appendChild(opt2);
            });

        }
    });
}

const GetPokemonListByType = async (id) => {
    let instance = axios.create({
        baseURL: urlPokemonApi,
        timeout: 10000
    });

    let response = await instance.get(`type/${id}`);
    if (response.status != 200) {
        console.log(`GetPokemonListByType error with type ${id}`)
        console.log(response);
        return [];
    }
    return Array.from(response.data.pokemon, x => x.pokemon.name);;
}

const SearchPokemons = async () => {
    let type1 = document.getElementById('PrimerTipo').value
    let type2 = document.getElementById('SegundoTipo').value
    let list1 = [];
    let list2 = [];

    if (type1 < 0 && type2 < 0) {
        return;
    }

    document.getElementById('ListaPokemons').innerHTML = '';

    if (type1 > 0) {
        list1 = await GetPokemonListByType(type1);
    }

    if (type2 > 0) {
        list2 = await GetPokemonListByType(type2);
    }

    //Si se tienen dos listas, se filtran los pokemons coincidentes, que son los que tienen ambos tipos
    if (list1.length > 0 && list2.length > 0) {
        let list3 = [];
        list1.forEach(elemet => {
            if (list2.indexOf(elemet) > -1) {
                list3.push(elemet);
            }

        });
        await CreatePokemonList(list3);
        return;
    }

    //Si solo se selecciono un tipo de pokemon, no se sabe cual asi que se guardan ambos en una sola
    list1 = [...list1, ...list2];
    //list1.concat(list2);
    await CreatePokemonList(list1);

}

const CreatePokemonList = async (lista) => {
    const container = document.getElementById('ListaPokemons');
    lista.forEach(element => {
        let button = document.createElement("button");
        button.className = 'btn btn-no-background';
        button.innerHTML = element;
        //
        button.onclick = async () => {
            await GetPokemonInfo(element);
        };
        container.appendChild(button);
    });
}

const GetPokemonInfo = async (name) => {
    let instance = axios.create({
        baseURL: urlPokemonApi,
        timeout: 10000
    });

    let response = await instance.get(`pokemon/${name}`);
    if (response.status != 200) {
        console.log(`GetPokemonInfo error with name ${name}`)
        console.log(response);
        return null;
    }
    //console.log(response.data);

    FillGenericData(response.data, name);
    GenerateCarousel(response.data.sprites);
    GenerateStats(response.data.stats);
    GenerateTypes(response.data.types);
    GenerateAbilities(response.data.abilities);
}

const GenerateCarousel = (list) => {
    const contenedor = document.getElementById('ContenedorImagenes');
    contenedor.innerHTML = '';
    ListSprites.forEach(element => {
        if(list[element] && typeof list[element] === 'string'){ //Si hay una imagen
            
            let a = document.createElement('a');
            a.className= 'carousel-item';

            let img = document.createElement('img');
            img.className = 'marg-auto'
            img.style['height'] = '100%';
            img.alt = 'imgPokemon';
            img.src = list[element];

            a.appendChild(img);
            contenedor.appendChild(a);
        }
    });
    initializeCaorusel();
}

const FillGenericData = ({ height, weight, name}) => {
    document.getElementById('NombrePokemon').innerHTML = name;
    
    let lb = document.createElement('label');
    lb.className = 'LabelType';
    lb.innerHTML = `Altura: ${height/10} M`;

    let altura = document.getElementById('AlturaPokemon');
    altura.innerHTML = '';
    altura.appendChild(lb)

    let lb2 = document.createElement('label');
    lb2.className = 'LabelType';
    lb2.innerHTML = `Peso: ${weight/10} Kg`;
    let peso = document.getElementById('PesoPokemon');
    peso.innerHTML = '';
    peso.appendChild(lb2)
}

const GenerateAbilities = (list) =>{
    const contenedor = document.getElementById('ListaHabilidadesPokemon');
    contenedor.innerHTML = '';
    let div = document.createElement('div');
    list.forEach(element => {
        let ability = document.createElement('label');
        ability.innerHTML = element.ability.name;
        ability.innerHTML += element.is_hidden ? ' (Oculta)' : '';
        ability.className = 'LabelType Ability';
        div.appendChild(ability);
        div.appendChild(document.createElement('br'));
    });
    div.removeChild(div.lastElementChild);
    contenedor.appendChild(div);
}

const GenerateTypes = (list) => {
    const contenedor = document.getElementById('ListaTiposPokemon');
    contenedor.innerHTML = '';
    list.forEach(element => {
        let type = document.createElement('label');
        type.innerHTML = element.type.name;
        type.className = `Type ${element.type.name}`;
        contenedor.appendChild(type);
    });
}

const GenerateStats = (list) => {
    const content = document.getElementById('StatsBar');
    content.innerHTML = '';
    list.forEach(element => {
        let stat = document.createElement('div');
        stat.className = 'padd-stats';
        let loadbar = document.createElement('div');
        loadbar.className = 'loadbar';
        loadbar.style['margin'] = 'auto';
        let bar = document.createElement('strong');
        bar.className = 'bar';
        bar.style['height'] = `${Math.floor((element.base_stat / 255) * 100)}%`;
        let name = document.createElement('b');
        name.innerHTML = element.stat.name;
        name.className = 'StatLabel';

        loadbar.appendChild(bar);
        stat.appendChild(loadbar);
        stat.appendChild(name);

        content.appendChild(stat);
    });
}

var instanceCaorusel = null;

const initializeCaorusel = () => {
    if (instanceCaorusel) { //Si la instancia no es nula la destruimos para volver a generarla
        //instanceCaorusel.destroy(); //Segun materialize lo destruye pero no se reconoce la funcion de su js
        instanceCaorusel = null;
    }

    let elems = document.querySelectorAll('.carousel');
    let options = {
        duration: 200,
        numVisible: 1,
        dist: 0,
        indicators : true
    }
    instanceCaorusel = M.Carousel.init(elems, options);
}

document.addEventListener('DOMContentLoaded', initializeCaorusel);

GetPokemonTypes();