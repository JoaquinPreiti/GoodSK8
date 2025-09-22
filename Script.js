/*Array: Productos*/
'use strict'

const d = document;

const productos = [ 
    /*TABLAS*/
    {
        id: 1,
        Name:'TABLA DE SKATE WOODOO BH-J',
        descripcion:'Apila 7 capas de Maple canadiense y con espíritu marplatense ejecuta las tablas más resistentes del mercado Construidas con tecnología EPOBLOCK',
        Precio: '$59990',
        IMG: 'IMG/Productos/tabla1.jpg',
        categoria:'Tablas',
        Filtros: 'tablas',
    },
    {
        id: 2,
        Name:'TABLA DE SKATE CLEAVER SUMO BLACK',
        descripcion:'Tabla de skate CLEAVER SUMO BLACK Construcción EPOBLOCK en 7 CAPAS DE MAPLE CANADIENSE  pegamento EPOXI',
        Precio: '$62490',
        IMG: 'IMG/Productos/tabla2.jpg',
        categoria:'Tablas',
        Filtros: 'tablas',
    },
    {
        id: 3,
        Name:'TABLA DE SKATE CLEAVER "BOLETOS"',
        descripcion:'Construcción EPOBLOCK en 7 CAPAS DE MAPLE CANADIENSE + pegamento EPOXI La tabla más robusta y con mejor relación calidad/precio del mercado.',
        Precio: '$62490',
        IMG: 'IMG/Productos/tabla3.jpg',
        categoria:'Tablas',
        Filtros: 'tablas',
    },
    {
        id: 4,
        Name:'TABLA DE SKATE WOODOO INST BH 2021 GD YELLOW',
        descripcion:'apila 7 capas de Maple canadiense y con espíritu marplatense ejecuta las tablas más resistentes del mercado.',
        Precio: '$59990',
        IMG: 'IMG/Productos/tabla4.jpg',
        categoria:'Tablas',
        Filtros: 'tablas',
    },
    {
        id: 5,
        Name:'TABLA DE SKATE POWELL PERALTA RIPPER NATURAL TURQUOISE 248',
        descripcion:' Estas tablas tienen una variedad de capas superiores teñidas de colores junto con una capa central roja. Son livianas, delgadas, tienen una excelente rigidez torsional y un pop nítido.',
        Precio: '$89990',
        IMG: 'IMG/Productos/tabla5.jpg',
        categoria:'Tablas',
        Filtros: 'tablas',
    },
    {
        id: 6,
        Name:'TABLA DE SKATE WOODOO BH ARAÑA-VERDE',
        descripcion:'Construidas con tecnología EPOBLOCK:tm: y testeadas por su exigente team de skaters.',
        Precio: '$89990',
        IMG: 'IMG/Productos/tabla6.jpg',
        categoria:'Tablas',
        Filtros: 'tablas',
    },
    /*LIJAS*/
    {
        id: 7,
        Name:'LIJA DE SKATE SINCOPE ACID EATERS - MULTICOLOR',
        descripcion:'Lija estampada autoadhesiva para todos los anchos de tabla tradicionales y excelente grip.',
        Precio: '$6990',
        IMG: 'IMG/Productos/lijas1.jpg',
        categoria:'Lijas',
        Filtros: 'Lijas',
    },
    { 
        id: 8,
        Name:'LIJA DE SKATE THRASHER PURPLE FLAME',
        descripcion:'Lija para skateboard de edición especial de marca Thrasher con las llamas de fuego creada por uno de los mejores fabricantes de lijas de skate como es Mob Grip.',
        Precio: '$12000',
        IMG: 'IMG/Productos/lijas2.jpg',
        categoria:'Lijas',
        Filtros: 'Lijas',
    },
    { 
        id: 9,
        Name:'LIJA DE SKATE WOODOO WASHED PURPLE',
        descripcion:'Lija estampada autoadhesiva apta para todos los anchos de tabla tradicionales con excelente grip.',
        Precio: '$6630',
        IMG: 'IMG/Productos/lijas3.jpg',
        categoria:'Lijas',
        Filtros: 'Lijas',
    },
    { 
        id: 10,
        Name:'LIJA DE SKATE THRASHER SKATEGOAT',
        descripcion:'Lija Thrasher edición especial con toda la calidad de Mob Grip',
        Precio: '$12000',
        IMG: 'IMG/Productos/lijas4.jpg',
        categoria:'Lijas',
        Filtros: 'Lijas',
    },
    /*RUEDAS*/
    {
        id: 11,
        Name:'RUEDAS DE SKATE CLEAVER APPERTURE 54 MM ORANGE',
        descripcion:'ruedas Diametro 54mm, Shape cónico, Dureza 99A',
        Precio: '$23990',
        IMG: 'IMG/Productos/ruedas1.jpg',
        categoria:'ruedas',
        Filtros:'Ruedas',
    },
    { 
        id: 12,
        Name:'RUEDAS DE SKATE CLEAVER APPERTURE 54MM - BLUE',
        descripcion:'ruedas Diametro 54mm, Shape cónico, Dureza 99A',
        Precio: '$23990',
        IMG: 'IMG/Productos/ruedas2.jpg',
        categoria:'ruedas',
        Filtros:'Ruedas',
    },
    { 
        id: 13,
        Name:'RUEDAS DE SKATE WOODOO POOL BUSTERS 55 MM X 36 MM',
        descripcion:' 55mm de diámetro x 36 mm de ancho.',
        Precio: '$24990',
        IMG: 'IMG/Productos/ruedas3.jpg',
        categoria:'ruedas',
        Filtros:'Ruedas',
    },
    { 
        id: 14,
        Name:'RUEDAS DE SKATE PIG PRIME CONICAL 55MM',
        descripcion:' Diametro 55mm, Ancho 34mm, Dureza 101A',
        Precio: '$48290',
        IMG: 'IMG/Productos/ruedas4.jpg',
        categoria:'ruedas',
        Filtros:'Ruedas',
    },
    { 
        id: 15,
        Name:'RUEDAS DE SKATE SINCOPE HULA WHEELS 53',
        descripcion:' Diametro 55mm, Coladas con uretano de alta resiliencia (SHR)',
        Precio: '$23290',
        IMG: 'IMG/Productos/ruedas5.jpg',
        categoria:'ruedas',
        Filtros:'Ruedas'
    },
    { 
        id: 16,
        Name:'RUEDAS DE SKATE WOODOO SOFTCOTTONS 55MM 78A - YELLOW',
        descripcion:' Diametro 55mm, Dureza de 78A, equivalente a 101 shore A.',
        Precio: '$22499',
        IMG: 'IMG/Productos/ruedas6.jpg',
        categoria:'ruedas',
        Filtros:'Ruedas'
    },
    /*RULEMANES*/
    {
        id: 17,
        Name:'RULEMANES DE SKATE BONES REDS 608',
        descripcion:'Retén High Speed Nylon™ para mayor resistencia y velocidad, Cobertor de goma sin contacto, removible.',
        Precio: '$32290',
        IMG: 'IMG/Productos/rulemanes1.jpg',
        categoria:'rulemanes',
        Filtros:'Rulemanes'
    },
    {
        id: 18,
        Name:'RULEMANES WOODOO REDWINGS II METALBOX',
        descripcion:'Set de 8 rulemanes ABEC 7',
        Precio: '$9499',
        IMG: 'IMG/Productos/rulemanes2.jpg',
        categoria:'rulemanes',
        Filtros:'Rulemanes'
    },
    {
        id: 19,
        Name:'RULEMANES DE SKATE MINILOGO "3" 608',
        descripcion:'Pack de 8 unidades, Lubricados con Speed Cream',
        Precio: '$17490',
        IMG: 'IMG/Productos/rulemanes3.jpg',
        categoria:'rulemanes',
        Filtros:'Rulemanes'
    },
    {
        id: 20,
        Name:'RULEMANES PIG SELECT BEARINGS',
        descripcion:'Pack de 8 unidades, Escudo extraíble único sin contacto para una fácil limpieza',
        Precio: '$17490',
        IMG: 'IMG/Productos/rulemanes4.jpg',
        categoria:'rulemanes',
        Filtros:'Rulemanes'
    },
    /*TRUKS*/
    {
        id: 21,
        Name:'TRUCKS DE SKATE ACE CLASSIC 44 RED (SET X 2U.)',
        descripcion:'Fabricados con ejes de aleación 7071 y acero 3056 industrial.',
        Precio: '$75990',
        IMG: 'IMG/Productos/truks1.jpg',
        categoria:'trucks',
        Filtros:'Truks'
    },
    { 
        id: 22,
        Name:'TRUCKS DE SKATE ACE CLASSIC 55 MATTE BLACK - SET X 2U.',
        descripcion:'Fabricados con ejes de aleación 7071 y acero 3056 industrial. Ejes de acero de la serie 3056 tratados térmicamente',
        Precio: '$75990',
        IMG: 'IMG/Productos/truks2.jpg',
        categoria:'trucks',
        Filtros:'Truks'
    },
    { 
        id: 23,
        Name:'TRUCKS DE SKATE ACE AF1-44 POLISHED (SET X 2U.)',
        descripcion:'Fabricado con aleación AA 356.2 de alta calidad utilizando nuestro propio método de fundición patentado',
        Precio: '$92790',
        IMG: 'IMG/Productos/truks3.jpg',
        categoria:'trucks',
        Filtros:'Truks'
    },
    { 
        id: 24,
        Name:'TRUCKS DE SKATE ACE AF1-55 SATIN LIME (SET X 2U.)',
        descripcion:'Construcción con un aumento del 70% en la integridad estructural del aluminio, lo que lo convierte en los trucks de fundición más fuerte del mercado. Actualizamos el tamaño de los modelos 44 al 77 para un mejor ajuste en varios anchos de tabla.',
        Precio: '$95390',
        IMG: 'IMG/Productos/truks4.jpg',
        categoria:'trucks',
        Filtros:'Truks'
    },
]

let ITEMS = d.querySelector('.Container');

function Cargado(allproducts){
    ITEMS.innerHTML = '';

    allproducts.forEach(Producto => {
        
        //DIVS
        let div = d.createElement('div');
        div.className = 'ProdSelec w-75 m-2 m-ms-3';
        div.setAttribute('data-id' , Producto.id);

        //Imagen
        let img = d.createElement('img');
        img.src = Producto.IMG;
        img.alt = Producto.Name;
        img.className = ('w100');

        //Titulo
        let Titulos = d.createElement ('h2')
        Titulos.textContent = Producto.Name;

        //Descripcion
        let Descripcion = d.createElement ('p');
        Descripcion.textContent = Producto.descripcion;
        
        //Precio
        let price = d.createElement('p');
        price.textContent = Producto.Precio;
        price.className = ('fw-bold text-danger');

        //Categoria
        let Category = d.createElement ('p');
        Category.textContent = Producto.categoria;
        Category.className = ('fw-bold text-secundary');
        
        //Boton
        let Bttn = d.createElement ('button');
        Bttn.id = 'Open';
        Bttn.textContent = 'Mas info';


        div.appendChild(img);
        div.appendChild(Titulos);
        div.appendChild(Descripcion);
        div.appendChild(price);
        div.appendChild(Category);
        div.appendChild(Bttn);

        ITEMS.append(div);
    })
}
//Cargado de productos
Cargado(productos);

let modal = d.getElementById('Modal');
let cuerpo = d.getElementById('Cuerpo');
let cerrar = d.getElementById('Close');
let TarProd = d.querySelector('.ProdSelec');
let open = d.getElementById('Open');

function Filtros(TarProd){
    TarProd.forEach(Tarjeta =>{
        Tarjeta.addEventListener('click', function(){
            const IdPro = this.getAttribute('data-id');
            const selector = productos.find (Producto => Producto.id === parseInt(IdPro));
            if (selector){

                let columns = d.createElement('div');
                columns.className = "col-12 col-md-5";
                d.querySelector('.cuerpo-modal').appendChild(columns);

                let insideColumn = d.createElement('div');
                insideColumn.className = 'col-12 col-md-6 mt-5 mt-md-0 Content';
                d.querySelector('.cuerpo-modal').appendChild(insideColumn);

                let Image = d.createElement('img');
                Image.src = selector.IMG;
                Image.alt = selector.Name;

                let Title = d.createElement('h3');
                Title.textContent = selector.Name;

                let Description = d.createElement('p');
                Description.textContent = selector.descripcion;

                let Price = d.createElement('p');
                Price.className = 'price text-danger fw-bold';
                Price.textContent = selector.Precio;

                let Categorias = d.createElement('p');
                Categorias.className = 'Categorias fw-bold';
                Categorias.textContent = selector.categoria;

                let Button = d.createElement('input');
                Button.type = 'button';
                Button.className = 'AñadirAlChango';
                Button.value = 'Añadir al carrito';

                columns.appendChild(Image);
                insideColumn.appendChild(Title);
                insideColumn.appendChild(Description);
                insideColumn.appendChild(Price);
                insideColumn.appendChild(Categorias);
                insideColumn.appendChild(Button);
                Button.addEventListener('click' , (e) => {
                    cuerpo.innerHTML = '';
                    modal.style.display = 'none';
                })
                modal.style.display = 'block';
            }
        })
    })
cerrar.addEventListener('click', (e) => {
    modal.style.display = 'none';
    cuerpo.innerHTML = '';
})
}

//Filtrovich
let Filtrado = d.querySelectorAll('.Bttn-Category');
Filtrado.forEach(filter => {
    filter.addEventListener ("click", (e) => {
        Filtrado.forEach(filter => filter.classList.remove("active"))
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != 'Borrar'){
            let ProdFil = productos.filter(Producto => Producto.Filtros === e.currentTarget.id);
            Cargado(ProdFil);
            Filtros(document.querySelectorAll('.ProdSelec'))
        }else{
            Cargado(productos);
            Filtros(document.querySelectorAll('.ProdSelec'));
        }
    })
});
Filtros(document.querySelectorAll('.ProdSelec'));

/* Creacion del Carrito */
let BttnCart = d.querySelector ('.container-cart-icon');
let ContainerProducts = d.querySelector ('.container-cart-products');

BttnCart.addEventListener ('click' , (e)=> {
    ContainerProducts.classList.toggle('hidden-cart');
})

let InformacionProd = d.querySelector ('.cart-product');
let Filas = d.querySelector ('.row-product');

let lista = d.querySelector('.cuerpo-modal');
const TotalValue = d.querySelector('.total-pagar');
const CountProd = d.querySelector('#contador-productos');

const EmptyCart = d.querySelector('.cart-empty');
const TotalCart = d.querySelector('.cart-total');
const DeleteCart = d.querySelector('.vaciar');

let Todo = [];

lista.addEventListener('click' , e =>{
    let botonComprar = lista.lastElementChild;

    if(e.target.lastElementChild == botonComprar){
        const Producto = e.target.parentElement;
        const InformacionProd = {
            cantidad: 1,
            encabezao: Producto.querySelector('h3').textContent,
            valor: Producto.querySelector('.price').textContent,
        };
        let Exit = Todo.some(productos => productos.encabezao === InformacionProd.encabezao);
        if (Exit){
            const productos = Todo.map(Producto =>{
                if(Producto.encabezao === InformacionProd.encabezao){
                    Producto.cantidad++;
                    return Producto;
                }else{
                    return Producto;
                }
            })
            Todo = [...productos]
        }else{
            Todo = [...Todo, InformacionProd]
        }
        MostrarModal();
    }
})
Filas.addEventListener('click', (e) =>{
    if(e.target.classList.contains('IconoCerrado')){
        const Producto = e.target.parentElement;

        const encabezao = Producto.querySelector('p').textContent;

        Todo = Todo.filter(
            Producto => Producto.encabezao !== encabezao,
        )
        MostrarModal();
    }  
})

/* Contenido dentro del carro */
const MostrarModal = () => {
    if (Todo.length){
        EmptyCart.classList.remove('hidden');
        Filas.classList.add('hidden');
        TotalCart.classList.add('hidden');
        DeleteCart.classList.add('hidden');
    }else{
        EmptyCart.classList.add('hidden');
        Filas.classList.remove('hidden');
        TotalCart.classList.remove('hidden');
        DeleteCart.classList.remove('hidden');
    }
    Filas.innerHTML = "";
    let TotalToPay = 0;

    let TotalProducts = 0;

    Todo.forEach(productos =>{
        const ContainerProducts = d.createElement('div');
        ContainerProducts.classList.add('cart-product');

        //Cantidad de productos
        let ProductoCarrito = d.createElement('span');
        ProductoCarrito.className = 'Count-Cart-Products';
        ProductoCarrito.textContent = productos.cantidad;

        //Titulo
        let Titulo = d.createElement('p');
        Titulo.className = 'Title-Cart-Product';
        Titulo.textContent = productos.encabezao;

        //Precio
        let Price = d.createElement('span');
        Price.className = 'Price-Cart-Product';
        Price.textContent = productos.valor;

        //Cerrar carro
        let CloseCart = d.createElement('img');
        CloseCart.src = "IMG/Close.png";
        CloseCart.className = "IconoCerrado";

        //La hora de mostrar
        ContainerProducts.append(ProductoCarrito);
        ContainerProducts.append(Titulo);
        ContainerProducts.append(Price);
        ContainerProducts.append(CloseCart);

        Filas.append(ContainerProducts);

        //Vaciar carrito
        DeleteCart.addEventListener('click', () =>{
            localStorage.removeItem ('productos');
            location.reload();
        });
        TotalToPay = TotalToPay + parseInt(productos.cantidad * productos.valor.slice(1));
        TotalProducts = TotalProducts + productos.cantidad;    
    })
    TotalValue.innerText = `$${TotalToPay.toFixed(2)}`;
    CountProd.innerText = TotalProducts;
    
    let TOTAL = d.querySelector('.ID');
    TOTAL.className = 'ID';
    TOTAL.innerHTML = `${TotalToPay.toFixed(2)}`;
}

//Compra
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = {
      Nombre: d.getElementById('nombre').value,
      Telefono: d.getElementById('telefono').value,
      Email: d.getElementById('email').value,
      Entrega: d.getElementById('lugarEntrega').value,
      Entrega: d.getElementById('fechaEntrega').value,
      MetodoDePago: d.getElementById('metodoPago').value,
      Cuotas: d.getElementById('cuotas').value
    };
    console.log(formData); 
    alert('Compra exitosa!!! Esperamos vuelva a comprar con nosotros pronto');
  });