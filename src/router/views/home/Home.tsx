import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link } from '@heroui/react'

export const HomeView = () => {
  return (
    <>
      <div className="text-3xl font-bold underline">
        <h1>Home View</h1>
        <p>This is the Home View</p>
      </div>
      <Card className="max-w-[400px] bg-amber-50">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-md">HeroUI</p>
            <p className="text-small text-default-500">heroui.com</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
            Visit source code on GitHub.
          </Link>
        </CardFooter>
        <Button>CLick me</Button>
      </Card>
    </>
  )
}
