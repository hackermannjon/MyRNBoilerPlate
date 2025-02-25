import { createStyles, theme } from "../../theme/unistyles";

export const styles = createStyles({
  input: {
    height: 40,
    borderColor: theme.Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: theme.Paddings.medium,
    fontFamily: theme.Fonts.primary,
    color: theme.Colors.text,
  },
});
