// Initialize app
var myApp = new Framework7({

    fastClicks: true,
}
);


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'nuevaCompra') {

        // CREO LAS VARIABLES, Y SUBO LOS DATOS A FIREBASE

        var Fecha_CompraV = document.getElementById("Fecha_CompraID");
        var Detalle_CompraV = document.getElementById("Detalle_CompraID");
        var Monto_CompraV = document.getElementById("Monto_CompraID");

        $$('#ConfirmarCompra').on('click', function () {

            db.collection("compras").doc().set({

                Tipo: "Compra",
                Fecha_compra: Fecha_CompraV.value,
                Detalle: Detalle_CompraV.value,
                Monto_compra: parseInt(Monto_CompraV.value)

            })

                .then(function (docRef) {
                    myApp.alert('Operación agregada con éxito', 'Compra');

                })

                .catch(function (error) {
                    myApp.alert("Ha sucedido un:", error);
                })


        })
    }

    if (page.name === 'compras') {

        // FILTRO POR CAMPO TIPO = COMPRA, CREO LOS DIV Y MUESTRO LOS CAMPOS DONDE CORRESPONDE

        var datosCompra = document.getElementById('#datosCompras');
        datosCompras.innerHTML = '';

        db.collection("compras").where("Tipo", "==", 'Compra').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().Detalle}`);
                datosCompras.innerHTML += `
        <ul>
          <li class="item-content">
            <div class="item-media"><i class="material-icons">date_range</i></div>
            <div class="item-inner">
              <div class="item-title">${doc.data().Fecha_compra}</div>
              <div class="item-after">$</div>
            </div>
          </li>
          <li class="item-content">
              <div class="item-media"><i class="material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title">${doc.data().Detalle}</div>
                <div class="item-after">${doc.data().Monto_compra}</div>
            </div>
          </li>
        </ul>
        <br>
            `
            });
        })

    }

    if (page.name === 'nuevaVenta') {

        $('#checkEnvio').click(function () {
            $('#formEnvioId').toggle();

        });

        $('#checkColoc').click(function () {
            $('#formColocId').toggle();

        });

        // CREO LAS VARIABLES, Y SUBO LOS DATOS A FIREBASE

        var Fecha_VentaV = document.getElementById("Fecha_VentaID");
        var ContactoV = document.getElementById("ContactoID");
        var NombreV = document.getElementById("NombreID");
        var ModeloV = document.getElementById("ModeloID");
        var MedidasV = document.getElementById("MedidaID");
        var ColoresV = document.getElementById("ColoresID");
        var Monto_VentaV = document.getElementById("Monto_VentaID");
        var Forma_PagoV = document.getElementById("Forma_pagoID");
        var Fecha_EntregaV = document.getElementById("Fecha_EntregaID");
        var NombreyapellidoV = document.getElementById("NombyApeID");
        var DniV = document.getElementById("DniID");
        var TelefonoV = document.getElementById("TelID");
        var DestinoV = document.getElementById("DestinoID");
        var CodpV = document.getElementById("CodpID");
        var Dir_ColocV = document.getElementById("Dir_ColocID");
        var Fecha_ColocV = document.getElementById("Fecha_ColocID");
        var Costo_ColocV = document.getElementById("Costo_ColocID");
        var ObsV = document.getElementById("Obs_VentaID");
        var EstadoV = document.getElementById("EstadoID");


        $$('#ConfirmarVenta').on('click', function () {

            db.collection("ventas").doc().set({

                Tipo: "Venta",
                Fecha_venta: Fecha_VentaV.value,
                Contacto: ContactoV.value,
                Nombre: NombreV.value,
                Modelo: ModeloV.value,
                Medidas: MedidasV.value,
                Colores: ColoresV.value,
                Monto_venta: parseInt(Monto_VentaV.value),
                Forma_pago: Forma_PagoV.value,
                Fecha_entrega: Fecha_EntregaV.value,
                Nombre_Apellido: NombreyapellidoV.value,
                DNI: DniV.value,
                Telefono: TelefonoV.value,
                Destino: DestinoV.value,
                CP: CodpV.value,
                Dir_colocación: Dir_ColocV.value,
                Fecha_colocación: Fecha_ColocV.value,
                Costo_colocación: parseInt(Costo_ColocV.value),
                Observaciones: ObsV.value,
                Estado_venta: EstadoV.value

            })

                .then(function (docRef) {
                    myApp.alert('Operación agregada con éxito', 'Venta');

                })

                .catch(function (error) {
                    myApp.alert("Ha sucedido un:", error);
                })


        })
    }

    if (page.name === 'ventas') {

        function VerMas() {
            $('#datosOcultos').toggle();
        }

        // FILTRO POR CAMPO TIPO = COMPRA, CREO LOS DIV Y MUESTRO LOS CAMPOS DONDE CORRESPONDE

        var datosVenta = document.getElementById('#datosVentas');
        datosVentas.innerHTML = '';

        db.collection("ventas").where("Tipo", "==", 'Venta').onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().Detalle}`);
                datosVentas.innerHTML += `
        <ul>
          <li class="item-content">
            <div class="item-media"><i class="material-icons">date_range</i></div>
            <div class="item-inner">
              <div class="item-title">${doc.data().Fecha_venta}</div>
            </div>
          </li>
          <div id="datosOcultos">
          <li class="item-content">
              <div class="item-media"><i class="material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title">Contacto:</div>
                <div class="item-after">${doc.data().Contacto}</div>
            </div>
            </div>
            <div>  
                <li class="item-content">
                <div class="item-media"><i class="material-icons"></i></div>
                <div class="item-inner">
                <div class="item-title">Nombre:</div>
                <div class="item-after">${doc.data().Nombre}</div>
                </div>
            </div>
          <li class="item-content">
              <div class="item-media"><i class="material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title">Modelo:</div>
                <div class="item-after">${doc.data().Modelo}</div>
            </div>
          </li>
          <li class="item-content">
              <div class="item-media"><i class="material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title">Medidas:</div>
                <div class="item-after">${doc.data().Medidas}</div>
            </div>
          </li>
          <li class="item-content">
              <div class="item-media"><i class="material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title">Colores:</div>
                <div class="item-after">${doc.data().Colores}</div>
            </div>
          </li>
          <div id="datosOcultos3">
          <li class="item-content">
              <div class="item-media"><i class="material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title">Precio:</div>
                <div class="item-after">${doc.data().Monto_venta}</div>
            </div>
            </div>
            <div id="datosOcultos4">
            <li class="item-content">
            <div class="item-media"><i class="material-icons"></i></div>
            <div class="item-inner">
              <div class="item-title">Forma de pago:</div>
              <div class="item-after">${doc.data().Forma_pago}</div>
          </div>
          </div>
            <li class="item-content">
              <div class="item-media"><i class="material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title">Fecha entrega:</div>
                <div class="item-after">${doc.data().Fecha_entrega}</div>
            </div>
          </li>
          <div id="datosOcultos4">
          <li class="item-content">
              <div class="item-media"><i class="material-icons"></i></div>
              <div class="item-inner">
                <div class="item-title">Observaciones:</div>
                <div class="item-after">${doc.data().Observaciones}</div>
            </div>
            </div>
            </li>
            <li class="swipeout">
      <div class="swipeout-content item-content">
      <div class="item-media"><i class="material-icons"></i></div>
      <div class="item-inner">
        <div class="item-title">Estado</div>
        <div class="item-after">${doc.data().Estado_venta}</div>
      </div>
      <div class="swipeout-actions-right color-green">
        <a href="#" class="action1 bg-green">Entregado!</a>
      </div>
    </li>
    <li class="item-content">
              <div class="item-media"></div>
              <div class="item-inner">
                <div class="item-title"></div>
                <p class="buttons-row">
    <a href="#" class="button button-fill color-green" onclick="VerMas();">Extender</a>
  </p>
            </div>
          </li>
        </ul>
        <br>
            `
            });
        })
    }

})

// ANIMACIÓN DEL FAB

$$('.icon-plus').on('click', function () {
    $$('.speed-dial').addClass('speed-dial-opened').insertAfter('speed-dial');
});

$$('.icon-close').on('click', function () {
    $$('.speed-dial').removeClass('speed-dial-opened');
});

$$('.speed-dial-buttons').on('click', function () {
    $$('.speed-dial').removeClass('speed-dial-opened');
});

var total_ingresos_netos = 0;

function IngresosNetos() {

    // FILTRO POR CAMPO TIPO = VENTA y SUMO LOS VALORES
    db.collection("compras").where("Tipo", "==", 'Compra').onSnapshot((querySnapshot) => {
        var total_count_compras = 0;
        querySnapshot.forEach((doc) => {
            total_count_compras += doc.data().Monto_compra;
        });

        // FILTRO POR CAMPO TIPO = COMPRA y SUMO LOS VALORES
        db.collection("ventas").where("Tipo", "==", 'Venta').onSnapshot((querySnapshot) => {
            var total_count_ventas = 0;
            querySnapshot.forEach((doc) => {
                total_count_ventas += doc.data().Monto_venta;

            });

            // SUMO LAS VARIABLES; HAGO LA RESTA Y MUESTRO EN PANTALLA

            var total_ingresos_netos = total_count_ventas - total_count_compras;
            document.getElementById("totalCompras").innerHTML = "$ " + total_count_compras;
            document.getElementById("totalVentas").innerHTML = "$ " + total_count_ventas;
            document.getElementById("ingresosNetos").innerHTML = "$ " + total_ingresos_netos;

        });


    });

}

function reloadindex() {

    location.reload();
}

function VerMas() {
    $('#datosOcultos').toggle();
    $('#datosOcultos2').toggle();
    $('#datosOcultos3').toggle();
    $('#datosOcultos4').toggle();
    $('#datosOcultos5').toggle();
}

// Hammer js

new Morris.Bar({
    // ID of the element in which to draw the chart.
    element: 'comprasgraf',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { mes: 'Agosto', value: 25000 },
        { mes: 'Septiembre', value: 18000 },
        { mes: 'Octubre', value: 13300 },
        { mes: 'Noviembre', value: 20000 },
        { mes: 'Diciembre', value: 27500 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'mes',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});

new Morris.Bar({
    // ID of the element in which to draw the chart.
    element: 'ventasgraf',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { mes: 'Agosto', value: 25000 },
        { mes: 'Septiembre', value: 18000 },
        { mes: 'Octubre', value: 13300 },
        { mes: 'Noviembre', value: 20000 },
        { mes: 'Diciembre', value: 27500 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'mes',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});
