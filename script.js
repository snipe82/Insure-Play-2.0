    function showMarketplace() {
        const dniInput = document.getElementById('dni').value;
        const termsChecked = document.getElementById('terms').checked;

        // Validar el formato del DNI (8 dígitos)
        if (!/^\d{8}$/.test(dniInput)) {
            alert('Por favor, ingresa un DNI válido de 8 dígitos.');
            return;
        }

        if (!termsChecked) {
            alert('Por favor, acepta los términos.');
            return;
        }

        document.getElementById('login-form').style.display = 'none';
        document.getElementById('loading').style.display = 'block';

        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('marketplace-section').style.display = 'block';
            document.getElementById('points-display').style.display = 'flex';
            document.getElementById('social-panel').style.display = 'block';
			document.getElementById('buttonZonaPrivada').style.display = 'block';
            // Mensaje de pólizas convenientes
            document.getElementById('info-message').innerText = "En base a tu documento de identidad hemos accedido a diferentes fuentes de datos que nos indican que estos seguros son los más convenientes para ti en este momento.";
        }, 2000);
		showModalMicrolearning();
    }

    // Función para canjear cupones
    function redeemCoupon(couponCode) {
        alert(`Cupón ${couponCode} canjeado exitosamente.`);
        // Lógica para actualizar puntos o aplicar descuento...
    }
	// Función que se ejecuta cuando el usuario hace clic en "Continuar"
    document.getElementById('continueBtn').addEventListener('click', function() {
    // Obtener el valor del DNI ingresado
    var dni = document.getElementById('dni').value;
    
    // Verificar que el DNI no esté vacío
    if (dni !== "") {
	setTimeout(function() {
// Mostrar el marketplace
        document.getElementById('marketplace-section').style.display = 'block';
        
        // Mostrar el chat
        document.getElementById('chat').style.display = 'block';
      
    }, 3000); // Delay de 3 segundos (puedes ajustar este valor)
        
    } else {
        alert('Por favor, ingrese su DNI');
    }
});

  // Verifica si el navegador soporta la API de Web Speech
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'es-ES'; // Puedes cambiar el idioma aquí
  recognition.continuous = false; // Cambia a true si deseas que siga escuchando

  // Evento que se dispara cuando se reconoce el discurso
  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('additional-info').value += transcript + " ";
  };

  // Botón para iniciar el reconocimiento de voz
  document.getElementById('microphone-btn').addEventListener('click', function() {
    recognition.start();
  });

  // Mensajes de estado opcionales
  recognition.onstart = function() {
    console.log("Reconocimiento de voz iniciado");
  };
  recognition.onend = function() {
    console.log("Reconocimiento de voz finalizado");
  };
} else {
  // Si el navegador no soporta la API
  alert('Tu navegador no soporta reconocimiento de voz.');
}
 const textarea = document.getElementById('additional-info');
    const micButton = document.getElementById('microphone-btn');

    // Verificamos si el navegador soporta la API de reconocimiento de voz
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // Configuraciones del reconocimiento de voz
    recognition.lang = 'es-ES'; // Idioma español
    recognition.continuous = false; // No continuo, solo una frase
    recognition.interimResults = false; // Solo mostrar resultados finales

    micButton.addEventListener('click', () => {
        recognition.start();
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        textarea.value += transcript;
    };

    recognition.onerror = (event) => {
        console.error('Error en el reconocimiento de voz: ', event.error);
    };
	//MODAL
	// Obtener referencias a los elementos
	var modal = document.getElementById('loadingModal');
	var span = document.querySelector('.close');

	// Función para mostrar el modal
	function showModalMicrolearning() {
    modal.style.display = 'flex'; // Muestra el modal
	}

	// Función para cerrar el modal
	function closeModal() {
    modal.style.display = 'none'; // Oculta el modal
	}

	// Cerrar el modal cuando se hace clic en la "x"
	span.onclick = closeModal;

	// Permitir cerrar el modal al hacer clic fuera de él
	window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
	};
	// script.js

// Mostrar el modal de seguro de salud
function showOptionsModalSalud() {
    const modal = document.getElementById("optionsModalSalud");
    modal.style.display = "flex";
}
// También puedes permitir cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById("optionsModalSalud");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Mostrar el modal de seguro de vida
function showOptionsModalVida() {
    const modal = document.getElementById("optionsModalVida");
    modal.style.display = "flex";
}
// También puedes permitir cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById("optionsModalVida");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Mostrar el modal de seguro de viajes
function showOptionsModalViajes() {
    const modal = document.getElementById("optionsModalViajes");
    modal.style.display = "flex";
}
// También puedes permitir cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById("optionsModalViajes");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Mostrar el modal de seguro de fiestas
function showOptionsModalFiestas() {
    const modal = document.getElementById("optionsModalFiestas");
    modal.style.display = "flex";
}
// También puedes permitir cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById("optionsModalFiestas");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Mostrar el modal de seguro de deportes extremos
function showOptionsModalExtreme() {
    const modal = document.getElementById("optionsModalExtreme");
    modal.style.display = "flex";
}

// Mostrar el modal de seguro de mascotas
function showOptionsModalMascotas() {
    const modal = document.getElementById("optionsModalMascotas");
    modal.style.display = "flex";
}
// También puedes permitir cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById("optionsModalMascotas");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
 
// Lógica para cerrar el modal
document.querySelectorAll('.close').forEach(function(element) {
    element.onclick = function() {
        const modal = element.closest('.modal');
        modal.style.display = "none";
    };
});


// Añadir un evento al botón de conversar
document.getElementById('chatButton').onclick = function() {
    alert("¡Iniciando conexión con tu broker favorito!");
	document.getElementById("optionsModalSalud").style.display = 'none';
	document.getElementById('comparisonPopup').style.display = 'flex';
};

// Añadir un evento al botón de conversar
document.getElementById('chatButtonLife').onclick = function() {
    alert("¡Iniciando conexión con tu broker favorito!");
	document.getElementById("optionsModalVida").style.display = 'none';
	document.getElementById('comparisonPopup').style.display = 'flex';
};

// Añadir un evento al botón de conversar
document.getElementById('chatButtonViajes').onclick = function() {
    alert("¡Iniciando conexión con tu broker favorito!");
	document.getElementById("optionsModalViajes").style.display = 'none';
	document.getElementById('comparisonPopup').style.display = 'flex';
};

// Añadir un evento al botón de conversar
document.getElementById('chatButtonFiestas').onclick = function() {
    alert("¡Iniciando conexión con tu broker favorito!");
	document.getElementById("optionsModalFiestas").style.display = 'none';
	document.getElementById('comparisonPopup').style.display = 'flex';
};
 
// Añadir un evento al botón de conversar
document.getElementById('chatButtonDeportesExtremos').onclick = function() {
    alert("¡Iniciando conexión con tu broker favorito!");
	document.getElementById("optionsModalExtreme").style.display = 'none';
	document.getElementById('comparisonPopup').style.display = 'flex';
};
 
// Añadir un evento al botón de conversar
document.getElementById('chatButtonMascotas').onclick = function() {
    alert("¡Iniciando conexión con tu broker favorito!");
	document.getElementById("optionsModalMascotas").style.display = 'none';
	document.getElementById('comparisonPopup').style.display = 'flex';
};
 
 


// Abrir el popup
document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('comparisonPopup').style.display = 'flex';
});

// Cerrar el popup
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('comparisonPopup').style.display = 'none';
});

// Cerrar el popup al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == document.getElementById('comparisonPopup')) {
        document.getElementById('comparisonPopup').style.display = 'none';
    }
};
 

// Manejo de pasos del modal personalizado

function cotizar() {
	document.getElementById('comparisonPopup').style.display = 'none';
	openCustomModal();
}

//Modal Pago
// Variable global para el paso actual
let currentStep = 0;

// Función para abrir el modal y reiniciar el paso
function openCustomModal() {
    currentStep = 0; // Reiniciar el paso
    showStep(currentStep); // Mostrar el primer paso
    document.getElementById("customModal").style.display = "block"; // Abrir el modal
}

// Función para mostrar el paso actual
function showStep(step) {
    const steps = document.querySelectorAll(".custom-modal-step");
    const progressBar = document.getElementById("customProgress");

    // Ocultar todos los pasos
    steps.forEach((s, index) => {
        s.style.display = index === step ? "block" : "none"; // Mostrar solo el paso actual
    });

    // Actualizar la barra de progreso
    progressBar.style.width = `${(step + 1) / steps.length * 100}%`; // Actualizar progreso
}

// Función para ir al siguiente paso
function customNextStep() {
    const steps = document.querySelectorAll(".custom-modal-step");
    if (currentStep < steps.length - 1) {
        currentStep++; // Aumentar el paso actual
        showStep(currentStep); // Mostrar el siguiente paso
    } else {
        closeCustomModal(); // Si es el último paso, cerrar el modal
    }
}

// Función para mostrar la sección de firma digital
function showDigitalSignature() {
    document.getElementById("signatureSection").style.display = "block";
}

// Función para cerrar el modal
function closeCustomModal() {
    document.getElementById("customModal").style.display = "none"; // Ocultar el modal
}


function openPrivateZone() {
    // Aquí puedes definir la lógica para abrir el popup o redirigir a la nueva página
  // window.open('zonaprivada.htm', 'MiZonaPrivada', 'width=600,height=600,resizable=yes,scrollbars=yes');
  showModalZonaprivada();
}


//funcion para servicios adicionales a seguros
document.getElementById("add-extra-services").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll('input[name="excluded_services"]:checked');
    const messageDiv = document.getElementById("messageSalud");
    
    if (checkboxes.length === 0) {
        messageDiv.textContent = "No has seleccionado ningún servicio.";
    } else {
        messageDiv.textContent = "Se agregaron los servicios seleccionados.";
    }
});

document.getElementById("add-extra-services-life").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll('input[name="excluded_services"]:checked');
    const selectedServices = Array.from(checkboxes).map(checkbox => checkbox.value);
    
    const message = document.getElementById("messageVida");
    
    if (selectedServices.length > 0) {
        message.innerHTML = `Se agregaron los servicios seleccionados.`;
        message.style.color = "blue"; // Cambiar el color a azul
    } else {
        message.innerHTML = "No has seleccionado ningún servicio.";
        message.style.color = "blue"; // Cambiar el color a azul
    }
});
 
document.getElementById("add-extra-services-travel").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll('input[name="excluded_services"]:checked');
    const messageDiv = document.getElementById("messageViajes");
    
    if (checkboxes.length === 0) {
        messageDiv.textContent = "No has seleccionado ningún servicio.";
    } else {
        messageDiv.textContent = "Se agregaron los servicios seleccionados.";
    }
});

document.getElementById("add-extra-services-parties").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll('input[name="excluded_services"]:checked');
    const messageDiv = document.getElementById("messageFiestas");
    
    if (checkboxes.length === 0) {
        messageDiv.textContent = "No has seleccionado ningún servicio.";
    } else {
        messageDiv.textContent = "Se agregaron los servicios seleccionados.";
    }
});

document.getElementById("add-extra-services-extreme").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll('input[name="excluded_services"]:checked');
    const messageDiv = document.getElementById("messageExtreme");
    
    if (checkboxes.length === 0) {
        messageDiv.textContent = "No has seleccionado ningún servicio.";
    } else {
        messageDiv.textContent = "Se agregaron los servicios seleccionados.";
    }
});

document.getElementById("add-extra-services-mascotas").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll('input[name="excluded_services"]:checked');
    const messageDiv = document.getElementById("messageMascotas");
    
    if (checkboxes.length === 0) {
        messageDiv.textContent = "No has seleccionado ningún servicio.";
    } else {
        messageDiv.textContent = "Se agregaron los servicios seleccionados.";
    }
});

function showDetailsMicroseguros() {
	
 alert("¡Un Broker se contactará contigo para explicarte a detalle el microseguros seleccionado!");
 
}


 // Cerrar el popup
        document.getElementById("close-popup").addEventListener("click", function() {
            document.getElementById("popup").style.display = "none";
        });

        // Mostrar paneles según el menú
        document.querySelectorAll(".menu a").forEach(link => {
            link.addEventListener("click", function(event) {
                event.preventDefault();
                document.querySelectorAll(".panel").forEach(panel => {
                    panel.style.display = "none";
                });
                const panelId = this.getAttribute("href").substring(1);
                document.getElementById(panelId).style.display = "block";
            });
        });
		
		
		function showModalZonaprivada() {
    document.getElementById("popup").style.display = 'flex'; // Muestra el modal
	}