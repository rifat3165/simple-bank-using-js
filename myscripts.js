<script>
        // Login button event handler 
        const loginBtn = document.getElementById("login");
        loginBtn.addEventListener("click", function(){
            const loginArea = document.getElementById("login-area");
            loginArea.style.display = "none";

            const transactionArea = document.getElementById("transaction-area");
            transactionArea.style.display = "block"
        })

        // Deposit button event handler
        const depositBtn = document.getElementById("addDeposit");
        depositBtn.addEventListener("click", function(){
            const depositAmount = document.getElementById("depositAmount").value;
            const depositNumber = parseFloat(depositAmount);

            // const currentDeposit = document.getElementById("currentDeposit").innerText;
            // const currentDepositNumber = parseFloat(currentDeposit);
            // const totalDeposit = depositNumber + currentDepositNumber
            // document.getElementById("currentDeposit").innerText = totalDeposit;

            // const currentBalance = document.getElementById("currentBalance").innerText;
            // const currentBalanceNumber = parseFloat(currentBalance);
            // const totalBalance = depositNumber + currentBalanceNumber;
            // document.getElementById("currentBalance").innerText = totalBalance;

            updateSpanText("currentDeposit", depositNumber);
            updateSpanText("currentBalance", depositNumber);

            document.getElementById("depositAmount").value = "";
        })
        function updateSpanText(id, depositNumber){
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            const total= depositNumber + currentNumber;
            document.getElementById(id).innerText = total;
        }
        

        // Withdraw button event handler
        const withdrawBtn = document.getElementById("takeWithdraw");
        withdrawBtn.addEventListener("click", function(){
            const withdrawAmount = document.getElementById("withdrawAmount").value;
            const withdrawNumber = parseFloat(withdrawAmount);

            // const currentWithdraw = document.getElementById("currentWithdraw").innerText;
            // const currentWithdrawNumber = parseFloat(currentWithdraw);
            // const totalWithdraw = currentWithdrawNumber - withdrawNumber; 
            // document.getElementById("currentWithdraw").innerText = totalWithdraw;

            // const currentBalance = document.getElementById("currentBalance").innerText;
            // const currentBalanceNumber = parseFloat(currentBalance);
            // const totalBalance = currentBalanceNumber - withdrawNumber;
            // document.getElementById("currentBalance").innerText = totalBalance;

            updateWithdrawSpanText("currentWithdraw", withdrawNumber);
            updateWithdrawSpanText("currentBalance", withdrawNumber);

            document.getElementById("withdrawAmount").value = "";
        })
        function updateWithdrawSpanText(id, withdrawNumber){
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            const total= currentNumber - withdrawNumber;
            document.getElementById(id).innerText = total;
        }

    </script>