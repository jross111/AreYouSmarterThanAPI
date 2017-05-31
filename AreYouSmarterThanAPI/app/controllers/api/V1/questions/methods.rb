class Methods

    include QuizType

    attr_accessor :method, :random, :array, :array_selection, :comparison, :comparison_selection, :choices, :question, :answer, :answer2

    def initialize() @comparison = ["<",">",">=","<="] end

    def chooseMethod(method) @method = method.sample end

    def createArray
        @random = rand(1..4)                            # start array at this number
        @array = Array.new(6) { |x| x + @random }       # create a 6-element incrementing array
        @array = [true,false].sample ? @array.reverse : @array # 50/50 chance reversing array
        @array_selection = @array.sample                # select one of those elements
        @array_backup = @array.dup                      # create a backup array
    end

    def chooseComparison
        @comparison_selection = @comparison.shuffle[0]  # select a comparison
        @comparison_rejection = @comparison[1]          # select a bad comparison
    end

    def newChoices() @choices = [] end

    def createQuestion(method)
        chooseMethod(method); createArray; chooseComparison; newChoices
    end

    def answers
        @array = @array_backup.dup
        @answer = eval @question                        # create the question, answer, and wrong answer for T/F
        @array = @array_backup.dup
        @answer2 = (@answer == nil ? "nil" : @answer )  # outputting for nil
    end

end
