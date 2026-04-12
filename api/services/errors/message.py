from core.errors import BaseServiceError, MessageNotExistsError

__all__ = ["MessageNotExistsError"]


class FirstMessageNotExistsError(BaseServiceError):
    pass


class LastMessageNotExistsError(BaseServiceError):
    pass


class SuggestedQuestionsAfterAnswerDisabledError(BaseServiceError):
    pass
