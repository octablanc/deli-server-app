"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlMailTemplate = void 0;
const HtmlMailTemplate = (user_name) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¡Bienvenido a DELI!</title>
    <style>
        body {
            font-family: 'Barlow', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .header-table {
            width: 100%;
            height: 70px; 
            background-color: #ff5023;
            text-align: center;
        }

        .header-cell {
            vertical-align: middle;
        }

        .logo-img {
            margin: auto;
        }

        .main-container {
            max-width: 693px; 
            margin-left: auto;
            margin-right: auto;
        }

        .main-content {
            text-align: center;
            padding: 49px; 
        }

        .main-heading {
            font-size: 63px; 
            font-weight: 700;
            color: #ff5023;
            margin: 0px;
            line-height: 1;
            letter-spacing: -1px;
        }

        .sub-heading {
            font-weight: 500;
            font-size: 26px; 
            margin: 0px;
            color: #000000;
        }

        .arrow-img {
            margin-right: 7px; 
            margin-bottom: -4px; 
        }

        .confirmation-text {
            font-size: 19.6px; 
            font-weight: 500;
            margin: 0px;
            color: #000000;
        }

        .confirmation-link {
            color: #fffff !important;
            text-transform: uppercase;
            border: none;
            background-color: #ff5023;
            padding: 14px 70px 14px 70px; 
            border-radius: 4px;
            text-decoration: none;
            font-size: 19.6px; 
            font-weight: 400;
        }

        .enjoy-text {
            margin: 0px;
            font-size: 23.8px; 
            color: #000000;
        }

        .footer-container {
            background-color: #f4f4f5;
            min-height: 133px; 
            font-size: 12.6px; 
            color: #4d4d4d;
        }

        .footer-content {
            padding: 35px; 
        }

        .footer-logo {
            margin: auto;
        }

        .support-text {
            color: #4d4d4d;
        }
    </style>
</head>

<body>
    <div class="main-container">
        <table style="width: 100%; height: 70px; background-color: #ff5023; text-align: center;">
            <tr>
                <td style="vertical-align: middle;">
                    <img src="https://i.ibb.co/0M9XDTD/Logotipo-da-Deli.png" alt="deli-logo" width="98" height="23"
                        style="margin: auto;">
                </td>
            </tr>
        </table>

        <div class="main-content">
            <div>
                <h1 class="main-heading">¡Bienvenido a deli ${user_name}!</h1>
                <h3 class="sub-heading">Muchas gracias por unirte a nuestra comunidad</h3>
            </div>

            <div style="margin-top: 35px; margin-bottom: 28px;">
                <div style="display: flex; justify-content: center; align-items: flex-end; text-align: center;">
                    <img class="arrow-img" src="https://i.ibb.co/vH0VhzW/arrow.png" alt="deli-logo" width="16"
                        height="16">
                    <p class="confirmation-text">Haz click en el siguiente botón para confirmar tu registro: </p>
                </div>
                <div style="margin-bottom: 70px; margin-top: 70px;">
                    <a href="https://deli.com.br/pt-br/" target="_blank" class="confirmation-link"
                        style="color: white">Ingresar</a>
                </div>
                <h4 class="enjoy-text">¡Esperamos que lo disfrutes tanto como nosotros!</h4>
            </div>
        </div>

        <div class="footer-container">
            <div class="footer-content">
                <img class="footer-logo" src="https://i.ibb.co/0CDbPmH/Logotipo-da-Deli-1.png" alt="deli-logo" width="98"
                    height="23">
                <p class="support-text">Si necesitas ayuda no dudes en dirigirte a nuestra área de soporte o contáctanos
                    a través del <strong>chat del sistema.</strong></p>
            </div>
        </div>
    </div>
</body>

</html>
`;
exports.HtmlMailTemplate = HtmlMailTemplate;
