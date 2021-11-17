/**
 * Simple strings
 */
export const yesText = "Ja";
export const noText = "Nein";
export const signInText = "Anmelden";
export const signUpText = "Registrieren";
export const signOutText = "Abmelden";
export const nameText = "Name";
export const emailText = "E-Mail";
export const passwordText = "Passwort";
export const passwordConfirmationText = "Passwort bestätigen";
export const cityText = "Stadt";
export const flatCodeText = "WG-Code";
export const flatNameText = "WG-Name";
export const joinFlatText = "Beitreten";
export const leaveFlatText = "WG verlassen";
export const editFlatText = "WG bearbeiten";
export const createFlatText = "Erstellen";
export const flatmatesText = "Mitglieder";
export const inviteText = "Einladen";
export const saveText = "Speichern";
export const generateInviteCodeText = "Code generieren";
export const editProfileText = "Profil bearbeiten";
export const saveSuccessText = "Gespeichert";
export const failureText = "Fehler";

/**
 * Error messages
 */

export const invalidEmailErrorText = "Ungültige E-Mail";
export const invalidCredentialsErrorText = "Ungültige Anmeldedaten";
export const passwordRequiredErrorText = "Passwort ist ein Pflichtfeld";
export const passwordConfirmationRequiredErrorText =
  "Passwortbestätigung ist ein Pflichtfeld";
export const invalidPasswordConfirmationErrorText =
  "Passwörter müssen übereinstimmen";
export const nameRequiredErrorText = "Name ist ein Pflichtfeld";
export const emailRequiredErrorText = "E-Mail ist ein Pflichtfeld";
export const flatNameRequiredErrorText = "WG-Name ist ein Pflichtfeld";
export const flatCityRequiredErrorText = "Stadt ist ein Pflichtfeld";
export const genericErrorText = "Fehler";

/**
 * Longer strings
 */
export const welcomeHeadingText = "Willkommen bei Flats!";
export const welcomeSubheadingText = "Schön dich zu sehen";
export const daytimeGreetingText = () => {
  const hour = new Date().getHours();
  let greeting;
  if (hour < 9) {
    greeting = "Guten Morgen!";
  } else if (hour < 18) {
    greeting = "Guten Tag!";
  } else {
    greeting = "Guten Abend!";
  }
  return greeting;
};
export const signInHeadingText = "Willkommen zurück!";
export const signInSubheadingText = "Melde dich an";
export const signUpHeadingText = "Neu hier?";
export const signUpSubheadingText = "Registriere dich";
export const createFlatHeadingText = "Erstelle eine WG";
export const joinFlatHeadingText = "Tritt einer WG bei";
export const noFlatText =
  "Du bist noch in keiner WG. Trete einer bei oder erstelle eine neue.";
export const greetingHeadingWithNameText = (name: string | null) =>
  `Hey ${name}!`;
export const greetingSubheadingText = "Willkommen";
export const flatCardHeadingText = "Deine WG";
export const accountCardHeadingText = "Account";
export const flatCodeShareText = (code: string | null) =>
  `Tritt meiner WG auf Flats bei mit dem Code: ${code} (5 Tage gültig)`;
export const leaveFlatConfirmationText = (flatName?: string) =>
  `Willst du deine WG ${flatName + " "}wirklich verlassen?`;

/**
 * Screen & Tab titles
 */

export const homeTabLabelText = "Home";
export const welcomeScreenTitleText = "Willkommen";
export const signInScreenTitleText = "Anmelden";
export const signUpScreenTitleText = "Registrieren";

export const homeScreenTitleText = "Home";
export const joinFlatScreenTitleText = "Beitreten";
export const createFlatScreenTitleText = "Erstellen";
export const editFlatScreenTitleText = "WG bearbeiten";
export const editProfileScreenTitleText = "Profil bearbeiten";
export const tasksTabLabelText = "Aufgaben";
export const financeTabLabelText = "Finanzen";
