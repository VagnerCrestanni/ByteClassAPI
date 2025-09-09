//const fastify = require('fastify')
//const crypto = require('crypto')
import fastify from "fastify"
import {fastifySwagger} from "@fastify/swagger"
import { fastifySwaggerUi } from "@fastify/swagger-ui"
import { validatorCompiler, serializerCompiler, type ZodTypeProvider, jsonSchemaTransform } from "fastify-type-provider-zod"
import { createCoursesRoute } from './src/routes/create-course.ts'
import { getCoursesRoute } from './src/routes/get-courses.ts'
import { getCoursesByIdRoute } from './src/routes/get-courses-by-id.ts'
import scalarAPIReference from '@scalar/fastify-api-reference'

const server = fastify({
    logger: {
        transport: {
            target: 'pino-pretty',
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: 'pid,hostname'
        },
    },
    },
}).withTypeProvider<ZodTypeProvider>()

if (process.env.NODE_ENV === 'development') {
    server.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'ByteClass API',
            version: '0.1.0',
        },
    },
    transform: jsonSchemaTransform,
})

// Render an API reference for a given OpenAPI/Swagger spec URL
server.register(scalarAPIReference, {
  routePrefix: '/docs',
})
}


server.setSerializerCompiler(serializerCompiler)
server.setValidatorCompiler(validatorCompiler)

server.register(createCoursesRoute)
server.register(getCoursesRoute)
server.register(getCoursesByIdRoute)
/*server.get('/courses', async (request, reply) => {
    const result = await db.select({
        id: courses.id,
        title: courses.title,
    })
    .from(courses)

    return reply.send({courses: result })
})*/

/*server.get('/courses/:id', {
    schema: {
        params: z.object({
            id: z.string().uuid(),
        })
    }
    }, async (request, reply) => {

    const courseId = request.params.id
    
    const result = await db
        .select()
        .from(courses)
        .where(eq(courses.id, courseId))

    if (result.length > 0) {
        return {course: result[0]}
    }

    return reply.status(404).send()
})*/


/*server.post('/courses', {
    schema: {
        body:  z.object({
            title: z.string().min(5, 'titulo precisar ter no minimo 5 caracteres')
        }),
    },

}, async (request, reply) => { 
    const courseTitle = request.body.title
    const courseId = crypto.randomUUID()

    const result = await db
        .insert(courses)
        .values({ title: courseTitle })
        .returning({ id: courses.id })
    
    return  reply.status(201).send({ courseId: result[0].id })
})*/


server.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})