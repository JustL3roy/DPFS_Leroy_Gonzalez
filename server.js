const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', { title: 'Inicio' });
});

// Rutas para productos
app.get('/products', (req, res) => {
    // Renderizar lista de productos
    res.render('products/productList', { title: 'Lista de Productos' });
});

app.get('/products/:id', (req, res) => {
    // Renderizar detalle de un producto en particular
    const productId = req.params.id;
    res.render('products/productDetail', { title: `Detalle del Producto ${productId}`, productId });
});

// Rutas para usuarios
app.get('/users/login', (req, res) => {
    // Renderizar vista de inicio de sesión
    res.render('users/userLogin', { title: 'Inicio de Sesión' });
});

app.get('/users/profile', (req, res) => {
    // Renderizar perfil del usuario
    res.render('users/userProfile', { title: 'Perfil de Usuario', user: { name: 'Juan' } });
});

// Configuración de multer para subir imágenes
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads/'); // Carpeta donde se guardarán las imágenes
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Generar un nombre único
    }
});
const upload = multer({ storage: storage });

// Ruta para mostrar el formulario de agregar producto
router.get('/admin/products/new', (req, res) => {
    res.render('formulario', { product: null });  // Renderiza el formulario vacío para agregar producto
});

// Ruta para agregar un producto (POST)
router.post('/admin/products', upload.single('image'), (req, res) => {
    const { name, price, description } = req.body;
    const image = req.file ? req.file.filename : null;

    // Aquí guardarías el producto en la base de datos (ejemplo usando un array de productos)
    const newProduct = { id: Date.now(), name, price, description, image };
    products.push(newProduct); // products sería un array que actúa como tu "base de datos"

    res.redirect('/admin/products'); // Redirige al listado de productos
});

// Ruta para mostrar el formulario de editar producto
router.get('/admin/products/:id/edit', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));  // Busca el producto por ID
    res.render('formulario', { product });  // Renderiza el formulario con los datos del producto a editar
});

// Ruta para actualizar un producto (PUT)
router.put('/admin/products/:id', upload.single('image'), (req, res) => {
    const { name, price, description } = req.body;
    const product = products.find(p => p.id === parseInt(req.params.id));  // Encuentra el producto a actualizar

    product.name = name;
    product.price = price;
    product.description = description;

    if (req.file) {
        product.image = req.file.filename;  // Si se subió una nueva imagen, actualízala
    }

    res.redirect('/admin/products');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
