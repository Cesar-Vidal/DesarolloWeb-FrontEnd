document.addEventListener("DOMContentLoaded", () => {
    let ingredientes = [];
  
    const input = document.getElementById("ingredient");
    const addBtn = document.getElementById("addBtn");
    const orderBtn = document.getElementById("orderBtn");
    const orderText = document.getElementById("orderText");
    const ingredientsText = document.getElementById("ingredientsText");
    const orderImage = document.getElementById("orderImage");
  
    function ordenarHamburguesa(ingredientes) {
        const ingredientesNoDisponibles = ["pulpo", "cebolla"];
      
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const noDisponibles = ingredientes.filter(ing => ingredientesNoDisponibles.includes(ing));
      
            if (noDisponibles.length > 0) {
              reject(`No cuento con los siguientes ingredientes: ${noDisponibles.join(", ")} 😔`);
            } else {
              resolve(`🍔 con ${ingredientes.join(", ")}`);
            }
          }, 1000);
        });
      }
      
  
    addBtn.addEventListener("click", () => {
      const nuevoIngrediente = input.value.trim().toLowerCase();
      if (nuevoIngrediente) {
        ingredientes.push(nuevoIngrediente);
        alert(`Ingrediente "${nuevoIngrediente}" agregado`);
        input.value = "";
      }
    });
  
    orderBtn.addEventListener("click", () => {
      ordenarHamburguesa(ingredientes)
        .then((resultado) => {
          orderText.textContent = "¡Aquí está tu hamburguesa!";
          ingredientsText.textContent = resultado;
          orderImage.src = "invoice.png";
        })
        .catch((error) => {
          orderText.textContent = "Lo sentimos 😞";
          ingredientsText.textContent = error;
          orderImage.src = "order.png";
        })
        .finally(() => {
          ingredientes = [];
        });
    });
  });
  