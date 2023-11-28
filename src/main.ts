import { Controller, Module, Get } from '@nestjs/common';

@Controller()
class AppController {
    @Get()
    getRootRouter() { 
        return 'hello there';
    }
}