 const screen = document.querySelector(".screen");
            const buttons = document.querySelectorAll("button");
            let current = "";
            buttons.forEach((btn) => {
                btn.addEventListener("click", () => {
                    const value = btn.textContent;
                    if (value === "AC") {
                        current = "";
                        screen.textContent = current;
                    } else if (value === "=") {
                        try {
                            current = eval(current).toString();
                            screen.textContent = current;
                        } catch {
                            screen.textContent = "Error";
                            current = "";
                        }
                    } else {
                        if (value === "X") {
                            current += "*";
                        } else {
                            current += value;
                        }
                        screen.textContent = current;
                    }
                });
            });