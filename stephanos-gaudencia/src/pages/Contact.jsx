import {useState} from "react"
import {useNavigate} from "react-router-dom"
import {motion} from "framer-motion"
import {z} from "zod"

const schema = z.object({
name: z.string().min(2,"Name must be at least 2 characters"),
email: z.string().email("Invalid email"),
message: z.string().min(10,"Message must be at least 10 characters")
})

function Contact(){

const navigate = useNavigate()

const [form,setForm] = useState({
name:"",
email:"",
message:""
})

const [errors,setErrors] = useState({})
const [reviews,setReviews] = useState(() => {
  return JSON.parse(localStorage.getItem("reviews")) || []
})



function handleChange(e){

setForm({
...form,
[e.target.name]:e.target.value
})

}

function handleSubmit(e){

e.preventDefault()

const result = schema.safeParse(form)

if(!result.success){

setErrors(result.error.flatten().fieldErrors)
return

}

const updatedReviews=[...reviews,form]

localStorage.setItem("reviews",JSON.stringify(updatedReviews))

setReviews(updatedReviews)

setForm({
name:"",
email:"",
message:""
})

navigate("/")

}

return(

<section className="max-w-6xl mx-auto py-16 grid grid-cols-2 gap-12">

<motion.form
onSubmit={handleSubmit}
initial={{opacity:0,x:-40}}
animate={{opacity:1,x:0}}
className="space-y-6"
>

<h1 className="text-3xl text-gold">
Contact Us
</h1>

<input
name="name"
placeholder="Name"
value={form.name}
onChange={handleChange}
className="w-full border border-gold bg-transparent p-3"
/>

{errors.name && <p className="text-red-400">{errors.name}</p>}

<input
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
className="w-full border border-gold bg-transparent p-3"
/>

{errors.email && <p className="text-red-400">{errors.email}</p>}

<textarea
name="message"
placeholder="Message or Review"
value={form.message}
onChange={handleChange}
className="w-full border border-gold bg-transparent p-3"
/>

{errors.message && <p className="text-red-400">{errors.message}</p>}

<button className="border border-gold px-6 py-3 text-gold hover:bg-gold hover:text-onyx transition">

Send Message

</button>

</motion.form>

<div>

<h2 className="text-2xl text-gold mb-6">
Seller Details
</h2>

<p>Stephanos Gaudencia Fashion House</p>

<p>Email: contact@stephanosgaudencia.com</p>

<p>Phone: +234 900 000 0000</p>

<p>Location: Benin City, Nigeria</p>

<h2 className="text-2xl text-gold mt-10 mb-6">
Customer Reviews
</h2>

<div className="space-y-4">

{reviews.map((review,index)=>(

<div key={index} className="border border-gold p-4">

<p className="text-gold text-sm">
{review.name}
</p>

<p className="text-sm">
{review.message}
</p>

</div>

))}

</div>

</div>

</section>

)

}

export default Contact