import fs from 'fs';
import path from 'path';

const requiredFiles = [
  'src/components/Input.jsx',
  'src/pages/LoginPage.jsx',
  'src/pages/DashboardPage.jsx',
  'src/pages/EmailVerificationPage.jsx',
  'src/pages/SignUpPage.jsx',
  'src/pages/ForgotPasswordPage.jsx',
  'src/pages/ResetPasswordPage.jsx',
  // Add other critical files here
];

const frontendDir = path.join(process.cwd(), 'frontend');

requiredFiles.forEach(file => {
  const filePath = path.join(frontendDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`Error: Required file ${file} does not exist!`);
    process.exit(1);
  }
});

console.log('All required files exist.');