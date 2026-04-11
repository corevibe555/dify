class BaseServiceError(ValueError):
    def __init__(self, description: str | None = None):
        self.description = description


class AppModelConfigBrokenError(BaseServiceError):
    pass


class ConversationNotExistsError(BaseServiceError):
    pass


class MessageNotExistsError(BaseServiceError):
    pass


class MoreLikeThisDisabledError(Exception):
    pass
