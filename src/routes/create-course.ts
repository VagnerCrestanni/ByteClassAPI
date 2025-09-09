import { FastifyPluginAsyncZod } from "fastify-type-provider-zod"
import { db } from "../database/clients.ts"
import { courses } from "../database/schema.ts"
import { z } from "zod"

export const createCoursesRoute: FastifyPluginAsyncZod = async (server) =>{
    server.post('/courses', {
        schema: {
            tags: ['courses'],
            summary: 'Create a new course',
            description: 'Essa rota recebe um título e cria um curso no banco de dados',
            body:  z.object({
                title: z.string().min(5, 'titulo precisar ter no minimo 5 caracteres')
            }),
            response: {
                201: z.object({ courseId: z.uuid() }).describe('Curso criado com sucesso'), 
            }
        },
    
    }, async (request, reply) => { 
        const courseTitle = request.body.title
        const courseId = crypto.randomUUID()
    
        const result = await db
            .insert(courses)
            .values({ title: courseTitle })
            .returning({ id: courses.id })
        
        return  reply.status(201).send({ courseId: result[0].id })
    })
}