const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
        {
            enunciado: "Escolha uma área de foco principal para sua vida futura",
            alternativas: [
                {
                    texto: "Carreira Profissional",
                    afirmacao: "  Buscar uma promoção na empresa atual ou mudar de carreira para seguir um novo sonho,"
                },
                {
                    texto: "Desenvolvimento Pessoal",
                    afirmacao: "Dedicar-se ao aprendizado contínuo (cursos, workshops) ou focar no autoconhecimento e práticas de bem-estar (meditação, terapia),"
                }
            ]
        },
        {
            enunciado: "Como você lida com oportunidades de mudança?",
            alternativas: [
                {
                    texto: "Abraçar mudanças e buscar novas oportunidades",
                    afirmacao: "mudar para uma nova cidade ou assumir projetos desafiadores,"
                },
                {
                    texto: "Preferir a estabilidade e aprimorar o que já está estabelecido",
                    afirmacao: "fortalecer relações profissionais e pessoais ou investir em melhorias no ambiente de trabalho ou moradia atual,"
                }
            ]
        },
        {
            enunciado: "Qual é a sua abordagem para a saúde e bem-estar no futuro?",
            alternativas: [
                {
                    texto: "Adotar uma rotina de exercícios rigorosa e uma dieta equilibrada",
                    afirmacao: "praticar esportes regularmente, consultar nutricionistas e seguir planos de alimentação,"
                },
                {
                    texto: "Focar em um equilíbrio mais flexível entre saúde e prazer",
                    afirmacao: "participar de atividades ao ar livre e hobbies que tragam prazer, permitir-se indulgências ocasionais na dieta,"
                }
            ]
        },
        {
            enunciado: "Como você planeja suas finanças futuras?",
            alternativas: [
                {
                    texto: "Ser financeiramente conservador e focar em poupança e investimentos seguros",
                    afirmacao: "investir em imóveis ou fundos de renda fixa ou manter uma reserva financeira para emergências,"
                },
                {
                    texto: "Adotar uma abordagem mais arriscada com potencial para maiores retornos",
                    afirmacao: "investir em ações e startups, explorar novas oportunidades de negócios,"
                }
            ]
        },
        {
            enunciado: "Qual é a sua visão sobre relacionamentos pessoais no futuro?",
            alternativas: [
                {
                    texto: "Priorizar a construção de uma família sólida e tradicional",
                    afirmacao: "casar-se e ter filhos, focar em criar um ambiente familiar estável,"
                },
                {
                    texto: "Valorizar a liberdade e experiências variadas nos relacionamentos",
                    afirmacao: "manter relacionamentos alternativos, viajar e conhecer novas culturas com amigos e parceiros,"
                }
            ]
        },
        {
            enunciado: "Qual é o seu papel na comunidade ou no mundo?",
            alternativas: [
                {
                    texto: "Envolver-se ativamente em causas sociais e voluntariado",
                    afirmacao: " trabalhar com ongs ou projetos comunitários, dedicar-se a causas ambientais ou sociais,"
                },
                {
                    texto: "Contribuir de forma mais passiva, focando no impacto pessoal",
                    afirmacao: "doar para caridades e apoiar causas à distância, influenciar positivamente seu círculo próximo,"
                }
            ]
        },
        {
            enunciado: "Como você lida com o aprendizado e o crescimento contínuos?",
            alternativas: [
                {
                    texto: "Buscar sempre novas oportunidades de aprendizado formal",
                    afirmacao: "fazer mestrados, doutorados ou especializações, participar de conferências e seminários e"
                },
                {
                    texto: "Aprender através da experiência e prática",
                    afirmacao: "realizar viagens de imersão cultural, participar de projetos e desafios práticos e"
                }
            ]
        },
        {
            enunciado: "Qual é a sua abordagem para os desafios e contratempos?",
            alternativas: [
                {
                    texto: "Enfrentar desafios de forma proativa e com resiliência",
                    afirmacao: "desenvolver planos de ação detalhados, buscar apoio em redes de suporte."
                },
                {
                    texto: "Adaptar-se aos desafios e buscar soluções criativas",
                    afirmacao: "encontrar formas inovadoras de contornar problemas, aceitar mudanças e ajustar-se rapidamente."
                }
            ]
        }
    ];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Para alcançar seus objetivos poderá...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
