/** @type {import('next').NextConfig} */


import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};

export default nextConfig;
