        function horaParaMinuto(data) {
            var timeParts = data.split(":");
            return Number(timeParts[0]) * 60 + Number(timeParts[1]);
        }
        var calculate = document.getElementById("calculate");
        var result = document.getElementById("result");
        $('#second').maskMoney({ decimal: ':', precision: 2 });
        function calculatePercentage() {
            var hora = parseFloat(1.00)
            var minutos = horaParaMinuto((document.getElementById("second").value))
            var resultado = hora * minutos / 60;
            result.innerHTML = "O calculo resulta em <strong class='alert'>" + resultado.toFixed(2) + "</strong> de hora.";
        }

        calculate.addEventListener('click', calculatePercentage);