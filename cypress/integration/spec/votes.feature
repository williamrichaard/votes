Feature: Votes

    @soliciting
    Scenario Outline: Solicitando todos os votos pertencentes à conta
        When solicitar todos os votos de um usuario usando o token "<type>"
        Then deve ser respondido o schema "get-votes" com status <status>
        Examples:
            | type    | status |
            | invalid | 401    |
            | valid   | 200    |

    Scenario Outline: Postando votos na API thecatapi e validando o contrato
        When postar os votos do tipo "<type>"
        Then deve ser respondido o schema "post-votes" com status <status>
        Examples:
            | type    | status |
            | invalid | 400    |
            | valid   | 200    |

    Scenario Outline: Solicitando um voto específico pertencente à conta
        When solicitar um tipo "<type>" de voto da conta
        Then deve ser respondido o schema "get-vote_id" com status <status>
        Examples:
            | type    | status |
            | invalid | 404    |
            | valid   | 200    |

    Scenario Outline: Deletando um voto específico pertencente à conta
        Given que tenha o ID de uma image
        And que tenha um voto cadastrado no thecatapi
        When deletar um tipo "<type>" de voto da conta
        Then deve ser respondido o schema "delete-vote" com status <status>
        Examples:
            | type    | status |
            | invalid | 400    |
            | valid   | 200    |

