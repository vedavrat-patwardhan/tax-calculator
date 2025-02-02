let currentStep = 1;
let isSalaried = false;

function updateProgress() {
  const progress = document.getElementById("progress");
  const steps = document.querySelectorAll(".step");

  const progressWidth = ((currentStep - 1) / (steps.length - 1)) * 100;
  progress.style.width = progressWidth + "%";

  steps.forEach((step, idx) => {
    if (idx < currentStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
}

function showStep(step) {
  document.querySelectorAll(".step-section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(`step${step}`).classList.add("active");
  currentStep = step;
  updateProgress();
}

function convertToIndianText(num) {
  if (num === 0) return "0";

  const units = ["", "Thousand", "Lakh", "Crore"];
  const numbers = String(num).split("");
  const length = numbers.length;

  if (length <= 3) return num;

  let result = "";
  if (length > 7) {
    const crores = Number(num.toString().substring(0, length - 7));
    result += crores + " Crore ";
    num = num % (crores * 10000000);
  }

  if (length > 5) {
    const lakhs = Math.floor(num / 100000);
    if (lakhs > 0) {
      result += lakhs + " Lakh ";
      num = num % (lakhs * 100000);
    }
  }

  if (length > 3) {
    const thousands = Math.floor(num / 1000);
    if (thousands > 0) {
      result += thousands + " Thousand";
      num = num % (thousands * 1000);
    }
  }

  return result.trim();
}

function handleEmployeeType(type) {
  isSalaried = type === "yes";
  showStep(2);
}

function calculateOldRegimeTax(income) {
  let taxableIncome = isSalaried ? income - 50000 : income;

  // Rebate check
  if (income <= (isSalaried ? 550000 : 500000)) {
    return 0;
  }

  let tax = 0;

  if (taxableIncome > 1000000) {
    tax += (taxableIncome - 1000000) * 0.3;
    taxableIncome = 1000000;
  }
  if (taxableIncome > 500000) {
    tax += (taxableIncome - 500000) * 0.2;
    taxableIncome = 500000;
  }
  if (taxableIncome > 250000) {
    tax += (taxableIncome - 250000) * 0.05;
  }

  return tax;
}

function calculate2020RegimeTax(income) {
  let taxableIncome = isSalaried ? income - 50000 : income;

  // Rebate check
  if (income <= (isSalaried ? 750000 : 700000)) {
    return 0;
  }

  let tax = 0;

  if (taxableIncome > 1500000) {
    tax += (taxableIncome - 1500000) * 0.3;
    taxableIncome = 1500000;
  }
  if (taxableIncome > 1200000) {
    tax += (taxableIncome - 1200000) * 0.2;
    taxableIncome = 1200000;
  }
  if (taxableIncome > 1000000) {
    tax += (taxableIncome - 1000000) * 0.15;
    taxableIncome = 1000000;
  }
  if (taxableIncome > 700000) {
    tax += (taxableIncome - 700000) * 0.1;
    taxableIncome = 700000;
  }
  if (taxableIncome > 300000) {
    tax += (taxableIncome - 300000) * 0.05;
  }

  return tax;
}

function calculate2023RegimeTax(income) {
  let taxableIncome = isSalaried ? income - 75000 : income;

  // Rebate check
  if (income <= (isSalaried ? 775000 : 700000)) {
    return 0;
  }

  let tax = 0;

  if (taxableIncome > 1500000) {
    tax += (taxableIncome - 1500000) * 0.3;
    taxableIncome = 1500000;
  }
  if (taxableIncome > 1200000) {
    tax += (taxableIncome - 1200000) * 0.2;
    taxableIncome = 1200000;
  }
  if (taxableIncome > 1000000) {
    tax += (taxableIncome - 1000000) * 0.15;
    taxableIncome = 1000000;
  }
  if (taxableIncome > 700000) {
    tax += (taxableIncome - 700000) * 0.1;
    taxableIncome = 700000;
  }
  if (taxableIncome > 300000) {
    tax += (taxableIncome - 300000) * 0.05;
  }

  return tax;
}

function calculate2024RegimeTax(income) {
  let taxableIncome = isSalaried ? income - 75000 : income;

  // Rebate check
  if (income <= (isSalaried ? 1275000 : 1200000)) {
    return 0;
  }

  let tax = 0;

  if (taxableIncome > 2400000) {
    tax += (taxableIncome - 2400000) * 0.3;
    taxableIncome = 2400000;
  }
  if (taxableIncome > 2000000) {
    tax += (taxableIncome - 2000000) * 0.25;
    taxableIncome = 2000000;
  }
  if (taxableIncome > 1600000) {
    tax += (taxableIncome - 1600000) * 0.2;
    taxableIncome = 1600000;
  }
  if (taxableIncome > 1200000) {
    tax += (taxableIncome - 1200000) * 0.15;
    taxableIncome = 1200000;
  }
  if (taxableIncome > 800000) {
    tax += (taxableIncome - 800000) * 0.1;
    taxableIncome = 800000;
  }
  if (taxableIncome > 400000) {
    tax += (taxableIncome - 400000) * 0.05;
  }

  return tax;
}

function generateOldRegimeDetails(income) {
  const slabs = [
    { range: "Up to ₹2,50,000", rate: 0 },
    { range: "₹2,50,001 - ₹5,00,000", rate: 5 },
    { range: "₹5,00,001 - ₹10,00,000", rate: 20 },
    { range: "Above ₹10,00,000", rate: 30 },
  ];
  return generateTaxDetails(income, slabs, 50000, 500000);
}

function generate2020RegimeDetails(income) {
  const slabs = [
    { range: "Up to ₹3,00,000", rate: 0 },
    { range: "₹3,00,001 - ₹7,00,000", rate: 5 },
    { range: "₹7,00,001 - ₹10,00,000", rate: 10 },
    { range: "₹10,00,001 - ₹12,00,000", rate: 15 },
    { range: "₹12,00,001 - ₹15,00,000", rate: 20 },
    { range: "Above ₹15,00,000", rate: 30 },
  ];
  return generateTaxDetails(income, slabs, 50000, 700000);
}

function generate2023RegimeDetails(income) {
  const slabs = [
    { range: "Up to ₹3,00,000", rate: 0 },
    { range: "₹3,00,001 - ₹7,00,000", rate: 5 },
    { range: "₹7,00,001 - ₹10,00,000", rate: 10 },
    { range: "₹10,00,001 - ₹12,00,000", rate: 15 },
    { range: "₹12,00,001 - ₹15,00,000", rate: 20 },
    { range: "Above ₹15,00,000", rate: 30 },
  ];
  return generateTaxDetails(income, slabs, 75000, 700000);
}

function generate2024RegimeDetails(income) {
  const slabs = [
    { range: "Up to ₹4,00,000", rate: 0 },
    { range: "₹4,00,001 - ₹8,00,000", rate: 5 },
    { range: "₹8,00,001 - ₹12,00,000", rate: 10 },
    { range: "₹12,00,001 - ₹16,00,000", rate: 15 },
    { range: "₹16,00,001 - ₹20,00,000", rate: 20 },
    { range: "₹20,00,001 - ₹24,00,000", rate: 25 },
    { range: "Above ₹24,00,000", rate: 30 },
  ];
  return generateTaxDetails(income, slabs, 75000, 1200000);
}

// modal handling
function showTaxDetails(regimeType) {
  const modal = document.getElementById("taxModal");
  const modalTitle = document.getElementById("modalTitle");
  const taxDetails = document.getElementById("taxDetails");
  const income = Number(document.getElementById("income").value);

  let details = "";
  switch (regimeType) {
    case 1:
      details = generateOldRegimeDetails(income);
      modalTitle.textContent = "Old Regime (1961-2020) Details";
      break;
    case 2:
      details = generate2020RegimeDetails(income);
      modalTitle.textContent = "New Regime (2020) Details";
      break;
    case 3:
      details = generate2023RegimeDetails(income);
      modalTitle.textContent = "New Regime (2023) Details";
      break;
    case 4:
      details = generate2024RegimeDetails(income);
      modalTitle.textContent = "Latest Regime (2025) Details";
      break;
  }

  taxDetails.innerHTML = details;
  modal.style.display = "block";
}

function calculateSlabTax(income, slabs, standardDeduction) {
  let taxableIncome = isSalaried ? income - standardDeduction : income;
  let remainingIncome = taxableIncome;
  let slabwiseTax = [];

  for (let i = slabs.length - 1; i >= 0; i--) {
    const slab = slabs[i];
    const [lower, upper] = getSlabLimits(slab.range);

    if (remainingIncome > lower) {
      const taxableAmount = upper
        ? Math.min(remainingIncome - lower, upper - lower)
        : remainingIncome - lower;
      const tax = (taxableAmount * slab.rate) / 100;
      if (tax > 0) {
        slabwiseTax.unshift({
          range: slab.range,
          rate: slab.rate,
          tax: tax,
        });
      }
      remainingIncome = lower;
    }
  }

  return slabwiseTax;
}

function getSlabLimits(range) {
  if (range.startsWith("Above")) {
    const lower = Number(range.split("₹")[1].replace(/,/g, ""));
    return [lower, null];
  }
  if (range.startsWith("Up to")) {
    const upper = Number(range.split("₹")[1].replace(/,/g, ""));
    return [0, upper];
  }
  const [lower, upper] = range
    .split(" - ")
    .map((amt) => Number(amt.replace(/₹|,/g, "")));
  return [lower, upper];
}

function generateTaxDetails(income, slabs, standardDeduction, rebateLimit) {
  const slabwiseTax = calculateSlabTax(income, slabs, standardDeduction);
  let totalTax = slabwiseTax.reduce((sum, slab) => sum + slab.tax, 0);

  // Check for rebate
  const isRebateApplicable = isSalaried
    ? income <= rebateLimit + standardDeduction
    : income <= rebateLimit;

  // Set total tax to 0 if rebate is applicable
  if (isRebateApplicable) {
    totalTax = 0;
  }

  let html = `
        <h4>Income: ₹${income.toLocaleString("en-IN")}</h4>
        ${
          isSalaried
            ? `<p>Standard Deduction: ₹${standardDeduction.toLocaleString(
                "en-IN"
              )}</p>`
            : ""
        }
        <p>Tax Rebate Limit: ₹${rebateLimit.toLocaleString("en-IN")}</p>
        ${
          isRebateApplicable
            ? `<p style="color: green;">✓ No tax payable - Income below rebate limit</p>`
            : ""
        }
        <h4>Tax Slabs:</h4>
        <table class="slab-table">
            <tr>
                <th>Income Range</th>
                <th>Tax Rate</th>
                <th>Your Tax Liability</th>
            </tr>
    `;

  slabwiseTax.forEach((slab) => {
    html += `
            <tr>
                <td>${slab.range}</td>
                <td>${slab.rate}%</td>
                <td>${
                  isRebateApplicable
                    ? "₹0"
                    : `₹${Math.round(slab.tax).toLocaleString("en-IN")}`
                }</td>
            </tr>
        `;
  });

  html += `
        <tr class="total-row">
            <td colspan="2"><strong>Total Tax</strong></td>
            <td><strong>₹${Math.round(totalTax).toLocaleString(
              "en-IN"
            )}</strong></td>
        </tr>
    </table>`;

  return html;
}

function formatTaxAmount(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

function calculateTax() {
  const income = Number(document.getElementById("income").value);
  if (!income) return;

  const tax1 = calculateOldRegimeTax(income);
  const tax2 = calculate2020RegimeTax(income);
  const tax3 = calculate2023RegimeTax(income);
  const tax4 = calculate2024RegimeTax(income);

  document.getElementById("tax1").textContent = formatTaxAmount(tax1);
  document.getElementById("tax2").textContent = formatTaxAmount(tax2);
  document.getElementById("tax3").textContent = formatTaxAmount(tax3);
  document.getElementById("tax4").textContent = formatTaxAmount(tax4);

  showStep(3);
}

function resetCalculator() {
  isSalaried = false;
  document.getElementById("income").value = "";
  let amountDisplay = document.getElementById("amount-text");
  if (amountDisplay) {
    amountDisplay.remove();
  }
  showStep(1);
}

// event listeners for modal
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("taxModal");
  const closeBtn = document.querySelector(".close-btn");

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Add click handlers for regime cards
  document.querySelectorAll(".regime-card").forEach((card, index) => {
    card.addEventListener("click", function () {
      if (document.getElementById("income").value) {
        showTaxDetails(index + 1);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const incomeInput = document.getElementById("income");
  if (incomeInput) {
    incomeInput.addEventListener("input", function (e) {
      const amount = e.target.value;
      if (amount) {
        const amountText = convertToIndianText(amount);
        let amountDisplay = document.getElementById("amount-text");
        if (!amountDisplay) {
          amountDisplay = document.createElement("p");
          amountDisplay.id = "amount-text";
          this.closest(".input-wrapper").appendChild(amountDisplay);
        }
        amountDisplay.textContent = `₹${amountText}`;
      }
    });
  }
  updateProgress();
});

// Initialize on load
updateProgress();
