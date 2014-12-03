/* ========================================================================= */
/* VARIABLES =============================================================== */
/* ========================================================================= */

var checkedBoxes = 0,
	round = [],
	results = [],
	tour;

/* ========================================================================= */
/* HELPERS ================================================================= */
/* ========================================================================= */

Handlebars.registerHelper('getCategory', function (id) {
	return _.findWhere(categories, {_id: id});
});

Handlebars.registerHelper('getItem', function (id) {
	return _.findWhere(items, {_id: id});
});

Handlebars.registerHelper('equals', function(a,b){
	return a == b;
});

trimInput = function(value) {
	return value.replace(/^\s*|\s*$/g, '');
};

/* ========================================================================= */
/* FUNCTIONS =============================================================== */
/* ========================================================================= */

var siteHandler = {
	/**
	 * Carga un template con los datos que recibe como parámetro.
	 *
	 * @param  {String}  name    	- Nombre del fichero .hbs donde se encuentra el template
	 * @param  {String}  where   	- Selector CSS donde vamos a insertar el template
	 * @param  {Object}	 context	- Objeto con los datos que va a utilizar el template
	 * @param  {Boolean} append  	- Si es true inserta el template al final de un contenedor para no borrar su contenido
	 */
	loadTemplate: function(name, where, context, append) {
		var location = where || '#' + name,
			data = context,
			template = JST['app/templates/' + name + '.hbs'],
			html = template(data);

		if (append)
			$(location).append(html);
		else
			document.querySelector(location).innerHTML = html;
	},
	/**
	 * Establece los eventos de la app
	 */
	setEvents: {
		/**
		 * Al hacer click sobre una caja se muestra un modal con su contenido (items).
		 * Si la caja ha sido comprobada se ocultará al cerrar el modal.
		 */
	},
	init: function() {
		this.loadTemplate('home', '#mainWrapper');

		/*// Provide your access token
		L.mapbox.accessToken = 'pk.eyJ1Ijoiam9zZW5tYXIiLCJhIjoiRTBnY2plZyJ9.16b9pM_DfVdunAs6jZmE-A';
		// Create a map in the div #map
		L.mapbox.map('map', 'josenmar.fac6fc28');*/

		//af9d9d26 municipios
		L.mapbox.accessToken = 'pk.eyJ1Ijoiam9zZW5tYXIiLCJhIjoiRTBnY2plZyJ9.16b9pM_DfVdunAs6jZmE-A';
		var map = L.mapbox.map('map', 'josenmar.fac6fc28');
		L.control.scale().addTo(map);

		function addLayer(layer, name, zIndex) {
		    layer
		        .setZIndex(zIndex)
		        .addTo(map);

		    // Create a simple layer switcher that
		    // toggles layers on and off.
		    var link = document.createElement('a');
		        link.href = '#';
		        link.className = 'active';
		        link.innerHTML = name;

		    link.onclick = function(e) {
		        e.preventDefault();
		        e.stopPropagation();

		        if (map.hasLayer(layer)) {
		            map.removeLayer(layer);
		            this.className = '';
		        } else {
		            map.addLayer(layer);
		            this.className = 'active';
		        }
		    };

		    layers.appendChild(link);
		}
	}
};

siteHandler.init();
