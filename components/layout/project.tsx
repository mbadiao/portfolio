import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import brick from "../../public/brickBreacker.png";
import forum from "../../public/forum.png";
import todo from "../../public/todo.png";
import workflow from "../../public/workflow.png";
import realTimeForum from "../../public/realtimeforum.png";
import caza from "../../public/caza.png";
import sunushop from "../../public/sunuShop.png";
import Link from "next/link";

const Project = () => (
  <div className="w-full py-10 lg:py-20 text-white">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>Projects</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              Some of projects that I have worked on.
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              It&apos;s a showcase of some of the projects that I have worked
              on.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video ">
              <Image
                src={caza}
                alt="Brick Breaker"
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="text-xl tracking-tight">CaZa</h3>
            <p className="text-muted-foreground text-base">
              CaZa is an apartment rental app for students and a hotel rental
              app for tourists. The app enables users to find accommodation to
              suit their needs, whether they&apos;re students looking for an
              affordable apartment or tourists looking for a comfortable hotel.{" "}
              <Link
                className="text-white"
                href="https://ca-za.vercel.app/"
                target="blank"
              >
                Demo
              </Link>{" "}
              and{" "}
              <Link
                className="text-white"
                href="https://github.com/mbadiao/TerangaStay"
                target="blank"
              >
                Code{" "}
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video ">
              <Image
                src={sunushop}
                alt="sunushop"
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="text-xl tracking-tight">sunuShop</h3>
            <p className="text-muted-foreground text-base">
              SunuShop is a cutting-edge e-commerce platform dedicated to
              bringing you the latest trends in fashion. Whether you&apos;re looking
              for stylish outfits, trendy accessories, or seasonal wardrobe
              staples, SunuShop offers a curated selection of high-quality
              clothing for men, women, and children.{" "}
              <Link
                className="text-white"
                href="https://sunushop.vercel.app/"
                target="blank"
              >
                Demo
              </Link>{" "}
              and{" "}
              <Link
                className="text-white"
                href="https://github.com/mbadiao/e-commerce"
                target="blank"
              >
                Code{" "}
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video ">
              <Image
                src={brick}
                alt="Brick Breaker"
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="text-xl tracking-tight">Brick Breacker</h3>
            <p className="text-muted-foreground text-base">
              game developed using Vanilla JS , HTML5 and CSS3{" "}
              <Link
                className="text-white"
                href="https://gamebrickbreaker.vercel.app/"
                target="blank"
              >
                Demo
              </Link>{" "}
              ,{" "}
              <Link
                className="text-white"
                href="https://github.com/mbadiao/brick-breacker"
                target="blank"
              >
                Code{" "}
              </Link>
              and{" "}
              <Link
                className="text-white"
                href="https://www.figma.com/design/MQFAlVIhyYWbFSRlpfS8b0/brick-breaker?node-id=0-1&t=DFSTpJ6zHI0ty3Jw-0"
                target="blank"
              >
                Design figma
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <Image
                src={workflow}
                alt="Workflow"
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="text-xl tracking-tight">WorkFlow</h3>
            <p className="text-muted-foreground text-base">
              A statique website for a company that offers services in the field
              of digital marketing.See
              <Link
                className="text-white"
                href="https://github.com/mbadiao/workflow"
                target="blank"
              >
                {" "}
                Code
              </Link>{" "}
              and
              <Link
                className="text-white"
                href="https://www.figma.com/design/wCtpIX9XPo63okB7F6XT2o/Untitled?t=5yVCCvYKEqDmGjOJ-1"
                target="blank"
              >
                {" "}
                Design figma
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <Image
                src={realTimeForum}
                alt="Forum"
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="text-xl tracking-tight">Real time Forum</h3>
            <p className="text-muted-foreground text-base">
              A real time forum using golang and gorilla/websocket for the
              backend websockets html css and js for the front end see{" "}
              <Link
                className="text-white"
                href="https://www.figma.com/design/SIsPTCkOY2NHSspiMGBthq/Portfolio?t=5yVCCvYKEqDmGjOJ-1"
                target="blank"
              >
                Design figma
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <Image
                src={forum}
                alt="Forum"
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="text-xl tracking-tight">Forum </h3>
            <p className="text-muted-foreground text-base">
              A forum using golang for the backend and html css and js for the
              front end but this it not real time
              <Link
                className="text-white"
                href="https://github.com/mbadiao/forum"
                target="blank"
              >
                {" "}
                Code
              </Link>{" "}
              and
              <Link
                className="text-white"
                href="https://www.figma.com/design/B9mGnkkZXI7Fdh9w98ka2d/Forum?node-id=0-1&t=bB0t8DxoW8YLbOYT-1"
                target="blank"
              >
                {" "}
                Design figma
              </Link>{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="bg-muted rounded-md aspect-video mb-2">
              <Image
                src={todo}
                alt="Todo"
                className="rounded-md object-cover"
              />
            </div>
            <h3 className="text-xl tracking-tight">todo app</h3>
            <p className="text-muted-foreground text-base">
              A todo app using reactjs
              <Link
                className="text-white"
                href="https://github.com/mbadiao/My_todo_app"
                target="blank"
              >
                {" "}
                Code
              </Link>
              and
              <Link
                className="text-white"
                href="https://www.figma.com/design/EdE6cfqAmYpoRpuxvGddpp/todo-app?node-id=0-1&t=5yVCCvYKEqDmGjOJ-1"
                target="blank"
              >
                {" "}
                Design figma
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
