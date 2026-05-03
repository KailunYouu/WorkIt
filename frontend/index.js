async function loadWorkouts() {
    try {
      const res = await fetch("http://localhost:4000/api/workouts", {
        method: "GET",
        headers: {
          "Authorization": "Bearer YOUR_TOKEN_HERE"
        }
      });
  
      const workouts = await res.json();
  
      const container = document.getElementById("workouts");
      container.innerHTML = "";
  
      workouts.forEach(w => {
        const div = document.createElement("div");
        div.innerHTML = `
          <h3>${w.title}</h3>
          <p>Goal: ${w.goal}</p>
          <p>Exercises: ${w.exercises.join(", ")}</p>
        `;
        container.appendChild(div);
      });
  
    } catch (err) {
      console.error("Error fetching workouts:", err);
    }
  }