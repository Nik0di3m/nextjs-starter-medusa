import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
          Posiadasz konto?
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
          Zaloguj się, dla lepszych doświadczeń zakupowych
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <Button
            variant="primary"
            className="h-10 bg-[#ffc800] text-black font-bold"
            data-testid="sign-in-button "
          >
            Zaloguj się
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
